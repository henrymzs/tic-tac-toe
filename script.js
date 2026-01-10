const Gameboard = (function () {
  const board = ["", "", "", "", "", "", "", "", ""];
  const getBoard = () => board;
  const placeMarker = function (index, marker) {
    if (board[index] === "") {
      board[index] = marker;
      return true;
    }
    return false;
  };
  const resetBoard = () => {
    board.fill("");
  };
  return { getBoard, placeMarker, resetBoard };
})();

function createPlayer(name, marker) {
  return { name, marker };
}

const GameController = (function () {
  let gameActive = false;
  let player1 = {};
  let player2 = {};
  let activePlayer = {};

  const board = Gameboard.getBoard();

  const winCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const startGame = function (name1, name2) {
    player1 = createPlayer(name1, "X");
    player2 = createPlayer(name2, "O");
    activePlayer = player1;
    gameActive = true;
  };

  const nextRound = function () {
    Gameboard.resetBoard();
    activePlayer = player1;
    gameActive = true;
    return { activePlayer: activePlayer.name };
  };

  const restart = function () {
    Gameboard.resetBoard();
    player1 = {};
    player2 = {};
    gameActive = false;
  };

  const checkWin = function () {
    for (let condition of winCondition) {
      const [a, b, c] = condition;
      if (board[a] !== "" && board[a] === board[b] && board[a] === board[c]) {
        return true;
      }
    }
    return false;
  };

  const checkResult = function () {
    if (checkWin()) {
      return "win";
    }
    if (!board.includes("")) {
      return "tie";
    }
    return "continue";
  };

  const playRound = function (index) {
    if (!gameActive) return;
    if (Gameboard.placeMarker(index, activePlayer.marker)) {
      if (checkResult() === "win") {
        gameActive = false;
        return { status: "win", winner: activePlayer.name };
      } else if (checkResult() === "tie") {
        return { status: "tie" };
      }
      activePlayer = activePlayer === player1 ? player2 : player1;
      return { status: checkResult(), activePlayer: activePlayer.name };
    }
    return Gameboard.getBoard();
  };
  return { startGame, playRound, nextRound, restart };
})();

const displayController = (function () {
  const setupForm = document.querySelector(".set-up-form");
  const player1 = setupForm.querySelector("#p1-name");
  const player2 = setupForm.querySelector("#p2-name");
  const startButton = setupForm.querySelector(".start-game-button");
  const turnDisplay = document.querySelector(".status-display");
  const nextRoundButton = document.querySelector(".next-round-button");
  const restartButton = document.querySelector(".restart-button");
  const board = document.querySelector(".game-board");

  const renderBoard = function () {
    board.innerHTML = "";

    Gameboard.getBoard().forEach((value, index) => {
      const cell = document.createElement("div");
      cell.classList.add("game-cell");

      cell.dataset.index = index;

      cell.textContent = value;
      if (value === "X") cell.classList.add("X-marker");
      if (value === "O") cell.classList.add("O-marker");

      board.appendChild(cell);
    });
  };

  board.addEventListener("click", (e) => {
    const index = e.target.dataset.index;
    const moveResult = GameController.playRound(index);

    renderBoard();

    if (moveResult && moveResult.status === "continue") {
      turnDisplay.textContent = `TURN: ${moveResult.activePlayer}`;
    } else if (moveResult && moveResult.status === "win") {
      turnDisplay.textContent = `${moveResult.winner} WIN GAME!`;
      turnDisplay.classList.add("end-game");
    } else if (moveResult && moveResult.status === "tie") {
      turnDisplay.textContent = "TIE GAME!";
      turnDisplay.classList.add("end-game");
    }
  });

  setupForm.addEventListener("submit", (e) => {
    e.preventDefault();

    player1.disabled = true;
    player2.disabled = true;
    startButton.disabled = true;
    setupForm.classList.add("start-game");
    const p1Name = player1.value.trim().toUpperCase() || "PLAYER 1";
    const p2Name = player2.value.trim().toUpperCase() || "PLAYER 2";
    turnDisplay.textContent = `TURN: ${p1Name}`;
    GameController.startGame(p1Name, p2Name);
  });

  nextRoundButton.addEventListener("click", () => {
    const nextRound = GameController.nextRound();
    turnDisplay.textContent = `TURN: ${nextRound.activePlayer}`;
    turnDisplay.classList.remove("end-game");
    renderBoard();
  });

  restartButton.addEventListener("click", () => {
    GameController.restart();

    player1.disabled = false;
    player2.disabled = false;
    startButton.disabled = false;
    setupForm.classList.remove("start-game");

    player1.value = "";
    player2.value = "";
    turnDisplay.textContent = "TURN:";

    renderBoard();
  });
  return { renderBoard };
})();
displayController.renderBoard();
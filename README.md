<h1 align="center">Tic-Tac-Toe Game</h1>

<p align="center">
  Jogo clássico de Tic-Tac-Toe (Jogo da Velha) desenvolvido com JavaScript vanilla.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/HTML-181717?style=flat&logo=HTML5" />
  <img src="https://img.shields.io/badge/CSS-181717?style=flat&logo=CSS" />
</p>

### 💻 Sobre o projeto
Tic-Tac-Toe Game é um projeto desenvolvido como parte do currículo do The Odin Project para praticar conceitos avançados de JavaScript, focando em organização de código e design patterns.

O desafio consistiu em criar um jogo da velha funcional implementando os padrões Module Pattern e Factory Pattern, garantindo encapsulamento de dados e separação de responsabilidades entre lógica do jogo e interface do usuário.

### ⚙️ Funcionalidades
- Cadastro de nomes personalizados para jogadores (Player 1 e Player 2)

- Alternância automática de turnos entre jogadores

-  Detecção de vitória com 8 condições possíveis

- Detecção de empate quando o tabuleiro está completo

- Indicador visual de turno e resultado do jogo

- Botão "Next Round" para nova partida mantendo jogadores

- Botão "Restart" para resetar jogo e cadastrar novos jogadores

- Marcadores visuais diferenciados (X e O)

- Validação de jogadas (não permite marcar células ocupadas)

### 🎨 Layout
Interface clean e minimalista com:

Header com título e instruções

Formulário de cadastro de jogadores

Tabuleiro 3x3 interativo

Display de status mostrando turno atual ou resultado

Botões de controle (Next Round e Restart)

![Desktop](./src/assets/images/desktop.png) 

### 🚀 Como executar o projeto
1. Clonar o repositório
```bash
https://github.com/henrymzs/tic-tac-toe.git
cd tic-tac-toe
```

2. Executar o projeto
Com Live Server (VSCode)
Clique com botão direito no index.html → "Open with Live Server"

### 🛠 Tecnologias
As seguintes ferramentas foram usadas na construção do projeto:
Front-End
- HTML5 - Estrutura semântica

- CSS3 - Estilização e responsividade

- JavaScript (ES6+)
    - Module Pattern (IIFE)
    - Factory Pattern
    - DOM Manipulation
    - Event Handling
    - Arrow Functions

### 🏗 Padrões utilizados
Module Pattern (IIFE)
Usado para encapsular lógica e criar privacidade de dados:
- Gameboard - Gerencia estado do tabuleiro

- GameController - Controla lógica do jogo

- displayController - Gerencia interface e eventos DOM

Factory Pattern
Usado para criar objetos jogadores dinamicamente:
```bash
function createPlayer(name, marker)
```

Separation of Concerns
- Lógica do jogo separada da apresentação visual

- Cada módulo tem uma responsabilidade única

### 💪 Como contribuir para o projeto
1. Faça um fork do projeto

2. Crie uma branch para sua feature:
```bash
git checkout -b feature/minha-feature
```

3. Commit suas mudanças:
```bash
git commit -m "feat: Adiciona minha feature"
```

4. Push para a branch:
```bash
git push origin feature/minha-feature
```

5. Abra um Pull Request

### 🦸 Autor

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat&logo=github)](https://github.com/henrymzs)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat&logo=linkedin)](https://linkedin.com/in/henry-kaua)
[![Email](https://img.shields.io/badge/Email-D14836?style=flat&logo=gmail&logoColor=white)](mailto:henrykaua21@gmail.com)
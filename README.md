# Memory Game

A React-based Pokémon memory game where players choose a difficulty level, memorize card positions, and try to match all Pokémon without repeating the same card.

## Overview

This project is a browser game built with React and uses the Pokémon API to load randomized cards. Players can:

- choose an easy, normal, or hard mode
- start a new round with a shuffled Pokémon card set
- track current score and high score
- play again after winning or losing
- sign in and out through AWS Amplify authentication

## Features

- Difficulty selector with three levels
- Randomized Pokémon card order
- Score tracking and persistent high score state
- Restart flow after win or loss
- Responsive UI with custom CSS modules
- Integration with PokeAPI for live Pokémon data
- AWS Amplify authentication wrapper

## Tech Stack

- React 18
- React Scripts
- JavaScript
- CSS Modules
- PokeAPI
- AWS Amplify
- UUID for React keys

## Project Structure

```text
memory-game/
├── public/
│   ├── index.html
│   ├── manifest.json
│   ├── robots.txt
├── src/
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── reportWebVitals.js
│   ├── setupTests.js
│   ├── components/
│   │   ├── Cart.js
│   │   ├── MainContainer.js
│   │   └── ServerConnection.js
│   └── css/
│       ├── App.module.css
│       ├── cart.module.css
│       └── serverConnection.module.css
├── package.json
├── README.md
└── .gitignore
```

## Getting Started

### Prerequisites

- Node.js 18+ recommended
- npm or yarn

### Installation

1. Clone the repository
2. Open the project folder
3. Install dependencies:

```bash
npm install
```

### Run the app

```bash
npm start
```

This will start the development server and open the app in the browser.

### Build for production

```bash
npm run build
```

### Run tests

```bash
npm test
```

## Gameplay

1. Select a difficulty level.
2. Start the game.
3. Click Pokémon cards one by one.
4. Avoid selecting the same Pokémon twice.
5. Each new correct pick increases the score.
6. If a repeated Pokémon is clicked, the game ends.
7. Complete the round to win and try to beat the high score.

## Authentication

The app is wrapped with Amplify's `Authenticator`, so users can sign in and sign out before playing. The app expects the AWS configuration file to be available in the project, usually through `aws-exports.js`.

## Notes

- Pokémon data is fetched from the public PokeAPI.
- Card generation and shuffling are handled in the React app logic.
- Styling is organized with CSS modules for each component area.

## License

This project is for educational and personal use.

## Author

Built as a simple React memory game project for learning frontend state management and API integration.

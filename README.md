# Magic Memory Game

A simple card-matching memory game built with React and TypeScript.

## Features

- Shuffle and start a new game at any time.
- Turn counter to track game progress.
- Card match state is preserved until all matches are found.
- Prevents selecting the same card twice in a single turn.

## Tech Stack

- React
- TypeScript
- Create React App

## Getting Started

### Prerequisites

- Node.js 18+ (recommended)
- npm

### Install

```bash
npm install
```

### Run locally

```bash
npm start
```

Open http://localhost:3000 in your browser.

## Scripts

- `npm start`: Start development server.
- `npm run build`: Create a production build.
- `npm test`: Run tests in watch mode.
- `npm run test:ci`: Run tests once for CI (passes if no tests are present).

## Project Structure

```text
src/
	components/    # UI components (card)
	data/          # card data source
	hooks/         # game logic hook
```

## Notes

- Images are loaded from `public/img`.
- This repo currently has no automated tests. Add tests under `src/**/*.test.tsx` if needed.

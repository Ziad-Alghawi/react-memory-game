# Magic Memory Game

Frontend project built with React and TypeScript, designed to showcase practical state management patterns, component architecture, and predictable UI behavior.

## Features

- Typed card model and deterministic render flow
- Turn tracking with explicit reset lifecycle
- Match resolution via immutable state updates
- Interaction lock during comparison window
- Guard against duplicate selection in a single turn

## Tech Stack

- React
- TypeScript
- Create React App
- CSS

## Architecture

```text
src/
  App.tsx                    # composition and state-to-view wiring
  components/
    Card.tsx                 # presentational card unit
  data/
    cards.ts                 # static card metadata
  hooks/
    useMemoryGame.ts         # game state and rules engine
```

## Engineering Highlights

- Game logic is isolated in a custom hook to separate business rules from rendering.
- Matching logic updates state immutably to preserve React predictability.
- Choice comparison is coordinated through effect-driven transitions.
- UI input is intentionally disabled during evaluation to avoid inconsistent states.
- Component contracts are strongly typed for safer refactoring.

## Available Scripts

- npm run build: production build
- npm run test: watch mode
- npm run test:ci: single-run CI mode
- npm run deploy: publish build to GitHub Pages

## Deployment (GitHub Pages)

This repository is configured for GitHub Pages deployment through the gh-pages branch.

1. Make sure your repository is named `memory-game` under your GitHub account.
2. Push your latest code to the `main` branch.
3. Run:

	```bash
	npm run deploy
	```

4. In GitHub repository settings:
	- Go to Pages
	- Source: Deploy from a branch
	- Branch: `gh-pages` / root

Live URL:

https://ziad-alghawi.github.io/memory-game

If you use a different repository name, update the `homepage` field in `package.json`.

## Notes

- Assets are served from `public/img`.
- Production build is verified.
- Test infrastructure is present; test cases can be extended as needed.

## Recruiter Snapshot

This project demonstrates core frontend engineering skills:

- translating product behavior into maintainable UI state
- designing reusable typed components
- handling interaction edge cases cleanly
- structuring a small app for clarity and growth

## Author

Built by Ziad Alghawi.

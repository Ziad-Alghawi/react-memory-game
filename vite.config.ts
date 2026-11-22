import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages serves the game under /react-memory-game/, and `npm run deploy` publishes build/
export default defineConfig({
  plugins: [react()],
  base: '/react-memory-game/',
  build: { outDir: 'build' },
});

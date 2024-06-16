import react from '@vitejs/plugin-react';
import tsConfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig(({ mode }) => ({
  plugins: [react(), tsConfigPaths()],
  test: {
    environment: 'jsdom',
    setupFiles: './__tests__/setup.ts'
  },
  resolve: {
    conditions: mode === 'test' ? ['browser'] : []
  }
}));

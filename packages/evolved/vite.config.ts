import { defineConfig } from 'vite';
import * as path from 'path';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: '@core',
        replacement: path.resolve(__dirname, '../core/src')
      },
      {
        find: '@evolved',
        replacement: path.resolve(__dirname, '/src')
      }
    ]
  },
  plugins: [vue()]
});

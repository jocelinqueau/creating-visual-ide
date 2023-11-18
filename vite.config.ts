import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import mdx from '@mdx-js/rollup'
import {resolve} from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    mdx(),
    react()
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
})

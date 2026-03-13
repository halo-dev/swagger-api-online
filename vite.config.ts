import Vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite-plus'
import VueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
  staged: {
    '*': 'vp check --fix'
  },
  lint: { options: { typeAware: true, typeCheck: true } },
  fmt: {
    semi: false,
    tabWidth: 2,
    singleQuote: true,
    printWidth: 100,
    trailingComma: 'none',
    sortPackageJson: false,
    ignorePatterns: ['src/assets/**']
  },
  plugins: [Vue(), VueDevTools(), UnoCSS({ configFile: './uno.config.ts' })],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})

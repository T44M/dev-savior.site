import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/dev-savior.site/',  // リポジトリ名に合わせて変更
})

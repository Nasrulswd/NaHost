import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/NaHost/', // <-- sama dengan nama repo GitHub kau
})

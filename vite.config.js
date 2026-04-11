import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from 'node:url'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    manifest: true,
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        privacyPolicy: fileURLToPath(new URL('./privacy-policy/index.html', import.meta.url)),
        termsOfService: fileURLToPath(new URL('./terms-of-service/index.html', import.meta.url)),
        receptionAgent: fileURLToPath(new URL('./reception-agent/index.html', import.meta.url)),
        leadReactivationAgent: fileURLToPath(new URL('./lead-reactivation-agent/index.html', import.meta.url)),
        afterSalesAgent: fileURLToPath(new URL('./after-sales-agent/index.html', import.meta.url)),
        contentMarketingAgent: fileURLToPath(new URL('./content-marketing-agent/index.html', import.meta.url)),
      },
    },
  },
})

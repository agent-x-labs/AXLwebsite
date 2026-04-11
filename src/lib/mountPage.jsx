import React from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'

export const mountPage = (Component) => {
  const container = document.getElementById('root')

  if (!container) {
    return
  }

  const app = (
    <React.StrictMode>
      <Component />
    </React.StrictMode>
  )

  if (container.hasChildNodes()) {
    hydrateRoot(container, app)
    return
  }

  createRoot(container).render(app)
}

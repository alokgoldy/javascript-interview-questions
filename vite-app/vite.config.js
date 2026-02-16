import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'mock-api',
      configureServer(server) {
        server.middlewares.use('/api/search', (req, res) => {
          try {
            const url = new URL(req.url, 'http://localhost')
            const q = (url.searchParams.get('q') || '').toLowerCase()
            const corpus = [
              'Apple',
              'Banana',
              'Cherry',
              'Date',
              'Elderberry',
              'Fig',
              'Grape',
              'Honeydew',
              'Indian Fig',
              'Jackfruit',
              'Kiwi',
              'Lemon',
              'Mango',
              'Nectarine',
              'Orange',
              'Papaya',
              'Quince',
              'Raspberry',
              'Strawberry',
              'Tomato',
              'Ugli fruit',
              'Vanilla',
              'Watermelon',
              'Xigua',
              'Yellow Passionfruit',
              'Zucchini',
            ]
            const results = q
              ? corpus.filter((item) => item.toLowerCase().includes(q)).slice(0, 10)
              : []
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ results }))
          } catch {
            res.statusCode = 500
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ error: 'server error' }))
          }
        })
      },
    },
  ],
})

import { useEffect, useState } from 'react'
import { useDebounce } from './hooks/useDebounce'

function App() {
  const [count, setCount] = useState(0)
  const [query, setQuery] = useState('')
  const debouncedQuery = useDebounce(query, 500)

  useEffect(() => {
    if (!debouncedQuery) return
  }, [debouncedQuery])

  return (
    <div style={{ padding: 24 }}>
      <h1>React Practice</h1>
      <div style={{ marginTop: 8 }}>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div style={{ marginTop: 16 }}>
        <label>
          Search:{' '}
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="type to debounce"
          />
        </label>
        <div style={{ marginTop: 8 }}>
          <strong>Immediate:</strong> {query || '—'}
        </div>
        <div>
          <strong>Debounced (500ms):</strong> {debouncedQuery || '—'}
        </div>
      </div>
    </div>
  )
}

export default App

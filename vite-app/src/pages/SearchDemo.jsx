import { useEffect, useState } from 'react'
import { useDebounce } from '../hooks/useDebounce'

function SearchDemo() {
  const [count, setCount] = useState(0)
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const debouncedQuery = useDebounce(query, 500)

  useEffect(() => {
    if (!debouncedQuery) {
      return
    }
    const ctrl = new AbortController()
    async function search() {
      const res = await fetch(`/api/search?q=${encodeURIComponent(debouncedQuery)}`, { signal: ctrl.signal })
      const data = await res.json()
      setResults(data.results ?? [])
    }
    search().catch((err) => {
      if (err.name !== 'AbortError') console.error(err)
    })
    return () => {
      ctrl.abort()
    }
  }, [debouncedQuery])

  return (
    <div className="app">
      <h1>React Practice</h1>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div>
        <label>
          Search:{' '}
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="type to debounce"
          />
        </label>
        <div>
          <strong>Immediate:</strong> {query || '—'}
        </div>
        <div>
          <strong>Debounced (500ms):</strong> {debouncedQuery || '—'}
        </div>
        <div>
          <strong>Results:</strong> {results.length}
        </div>
        {results.length > 0 && (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {results.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default SearchDemo

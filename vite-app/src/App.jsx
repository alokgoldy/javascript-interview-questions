import { Routes, Route, Link } from 'react-router-dom'
import SearchDemo from './pages/SearchDemo'

function App() {
  return (
    <>
      <nav style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
        <Link to="/">Search Demo</Link>
      </nav>
      <Routes>
        <Route path="/search-demo" element={<SearchDemo />} />
      </Routes>
    </>
  )
}

export default App

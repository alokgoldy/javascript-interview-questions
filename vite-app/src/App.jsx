import { Routes, Route, Link } from 'react-router-dom'
import SearchDemo from './pages/SearchDemo'
import InfiniteScroll from './pages/InfiniteScroll'

function App() {
  return (
    <>
      <Routes>
        <Route path="/search-demo" element={<SearchDemo />} />
        <Route path="/infinite-scroll" element={<InfiniteScroll/>}/>
      </Routes>
    </>
  )
}

export default App

import { Routes, Route, Link } from 'react-router-dom'
import SearchDemo from './pages/SearchDemo'
import InfiniteScroll from './pages/InfiniteScroll'
import UsePrevious from './pages/UsePrevious'

function App() {
  return (
    <>
      <Routes>
        <Route path="/search-demo" element={<SearchDemo />} />
        <Route path="/infinite-scroll" element={<InfiniteScroll/>}/>
        <Route path="/use-previous" element={<UsePrevious/>}/>
      </Routes>
    </>
  )
}

export default App

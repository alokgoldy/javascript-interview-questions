import { useRef, useState } from 'react';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';

function InfiniteScroll() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const containerRef = useRef(null);

  async function loadMore() {
    const res = await fetch(`/api/items?page=${page}`);
    const data = await res.json();
    setItems((prev) => [...prev, ...data.items]);
    setPage((p) => p + 1);
    if (!data.nextPage) setHasMore(false);
  }

  const { sentinelRef } = useInfiniteScroll({
    loadMore,
    hasMore,
    rootRef: containerRef,
    rootMargin: '100px',
  });

  return (
    <div className="app">
      <h1>Infinite Scroll</h1>
      <div ref={containerRef} className="infinite-scroll-container">
        <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
          {items.map((item, i) => (
            <li
              key={i}
              style={{
                padding: '8px 12px',
                borderBottom: '1px solid #eee',
              }}
            >
              {item}
            </li>
          ))}
        </ul>
        <div ref={sentinelRef} style={{ height: 8 }} />
        {!hasMore && <div style={{ padding: 12, color: '#666' }}>No more items</div>}
      </div>
    </div>
  );
}
export default InfiniteScroll

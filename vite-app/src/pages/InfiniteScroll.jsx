import { useState, useRef } from 'react';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';

function InfiniteScroll() {
   const [items, setItems] = useState([]);
   const [hasMore, setHasMore] = useState(true);
   const [page, setPage] = useState(1);
   const containerRef = useRef(null);

   async function loadMore() {
      const res = await fetch(`/api/items?page=${page}`);
      const data = await res.json();
      setItems(prev => [...prev, ...data.items]);
      setPage(prev => prev + 1);

      if(!data.nextPage) setHasMore(false);
   }
   const { sentinelRef } = useInfiniteScroll({
      loadMore,
      hasMore,
      rootRef: containerRef,
      rootMargin: '100px'
   });

   return (
      <div className='app'>
         <h1>Infinite Scroll</h1>
         <div ref={containerRef} className='infinite-scroll-container'>
            <ul>
               {items.map((item, i) => {
                  <li key={i}>
                   {item}
                  </li>
               })}
            </ul>
         </div>
         <div ref={sentinelRef} style={{ height: 8 }}/>
         {!hasMore && <div className='no-more-items'>No more items</div>}
      </div>
   )
}

export default InfiniteScroll;
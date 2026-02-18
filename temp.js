import { useEffect, useRef } from 'react';

export function useInfiniteScroll({
  loadMore,
  hasMore,
  rootRef = null,
  rootMargin = '0px',
  threshold = 0,
  disabled = false,
}) {
  const sentinelRef = useRef(null);
  const loadingRef = useRef(false);

  useEffect(() => {
    if (disabled) return;
    if (!hasMore) return;
    const node = sentinelRef.current;
    if (!node) return;
    const rootEl = rootRef && 'current' in rootRef ? rootRef.current : null;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry && entry.isIntersecting && !loadingRef.current) {
          loadingRef.current = true;
          observer.unobserve(node);
          Promise.resolve(loadMore())
            .catch(() => { })
            .finally(() => {
              loadingRef.current = false;
              observer.observe(node);
            });
        }
      },
      { root: rootEl, rootMargin, threshold }
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
    };
  }, [hasMore, rootRef, rootMargin, threshold, disabled, loadMore]);

  return { sentinelRef };
}

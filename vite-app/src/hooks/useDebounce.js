import { useEffect, useState } from 'react';


export function useDebounce(value, delay = 300) {
  const [usedebouncedValue, setUsedebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setUsedebouncedValue(value);
    }, delay)

    return () => clearTimeout(handler);
  }, [delay, value])

  return usedebouncedValue;
}
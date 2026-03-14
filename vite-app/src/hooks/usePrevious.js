import { useEffect, useRef, useState } from 'react';

export function usePrevious(value, initialValue = undefined) {
  const [prev, setPrev] = useState(initialValue);
  const ref = useRef(value);
  useEffect(() => {
    setPrev(ref.current);
    ref.current = value;
  }, [value]);
  return prev;
}

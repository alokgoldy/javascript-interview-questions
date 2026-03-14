import { useState } from 'react';
import { usePrevious } from '../hooks/usePrevious';

function UsePrevious() {
  const [text, setText] = useState('');
  const [count, setCount] = useState(0);
  const prevText = usePrevious(text, '');
  const prevCount = usePrevious(count, 0);

  return (
    <div className="app">
      <h1>usePrevious Demo</h1>
      <div>
        <label>
          Text:{' '}
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="type to track previous"
          />
        </label>
        <div>
          <strong>Current:</strong> {text || '—'}
        </div>
        <div>
          <strong>Previous:</strong> {prevText || '—'}
        </div>
      </div>
      <div style={{ marginTop: 16 }}>
        <button onClick={() => setCount((c) => c + 1)}>Increment</button>
        <div>
          <strong>Current Count:</strong> {count}
        </div>
        <div>
          <strong>Previous Count:</strong> {prevCount}
        </div>
      </div>
    </div>
  );
}

export default UsePrevious;

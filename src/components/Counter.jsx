import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  return (
    <div>
      <h1>{count}</h1>

      <div style={{ marginTop: '20px' }}>
        <button className="button" onClick={increment}>
          Увеличить
        </button>
        <button className="button" onClick={decrement}>
          Уменьшить
        </button>
      </div>
    </div>
  );
}

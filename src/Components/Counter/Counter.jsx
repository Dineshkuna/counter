import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="text-center border p-4 rounded shadow" style={{ maxWidth: '300px' }}>
        <button
          className="btn btn-success mx-2"
          onClick={() => setCount(count + 1)}
        >
          +
        </button>

        <p className="my-3 fs-4">Count: {count}</p>

        <button
          className="btn btn-danger mx-2"
          onClick={() => setCount(count > 0 ? count - 1 : 0)}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;

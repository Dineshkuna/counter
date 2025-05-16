import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card text-center shadow p-4" style={{ width: '300px' }}>
        <h3 className="card-title mb-3">React Counter</h3>

        <div className="d-flex justify-content-center align-items-center mb-3">
          <button
            className="btn btn-outline-primary me-2"
            onClick={() => setCount(count + 1)}
          >
            +
          </button>

          <h4 className="mb-0 mx-3">{count}</h4>

          <button
            className="btn btn-outline-danger ms-2"
            onClick={() => setCount(count > 0 ? count - 1 : 0)}
          >
            -
          </button>
        </div>

        <button
          className="btn btn-secondary"
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;

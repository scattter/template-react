import React, { useState } from 'react';
import '@/index.scss';
import { Demo } from './constant';
import { Home } from './pages/home';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>APP demo 3 5 7</h1>
      <h2>{Demo.first}</h2>
      <span>count is {count}</span>
      <button className="button" onClick={() => setCount((c) => c + 1)}>
        add
      </button>
      <Home />
    </>
  );
};

export default App;

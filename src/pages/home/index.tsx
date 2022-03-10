import { useState } from 'react';

export const Home = () => {
  const [num, setNum] = useState(0);

  return (
    <>
      <h1>This is Home Page</h1>
      <strong>state is {num}</strong>
      <br />
      <button
        onClick={() => {
          setNum((n: number): number => {
            return n + 1;
          });
        }}
      >
        revert state
      </button>
    </>
  );
};

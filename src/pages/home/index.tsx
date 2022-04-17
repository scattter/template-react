import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const [num, setNum] = useState(0);
  const navigate = useNavigate();
  const handleClick = (path: String) => {
    navigate(`/${path}`);
  };

  return (
    <div className="center">
      <h1>This is Home Page</h1>
      <strong>state is {num}</strong>
      <button
        onClick={() => {
          setNum((n: number): number => {
            return n + 1;
          });
        }}
      >
        revert state
      </button>
      <br />
      <button onClick={() => handleClick('about')}>click here to about page</button>
      <br />
      <button onClick={() => handleClick('app')}>click here to app list page</button>
    </div>
  );
};
export default Home;

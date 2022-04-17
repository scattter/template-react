import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

function AppLayout() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/home');
  };
  return (
    <div className="center">
      <span>this is app layout</span>
      <Outlet />
      <button onClick={handleClick}>click here back to home page</button>
    </div>
  );
}

export default AppLayout;

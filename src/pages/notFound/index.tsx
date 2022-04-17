import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function NotFound() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/home');
  }, []);

  return <span>this is 404 page</span>;
}

export default NotFound;

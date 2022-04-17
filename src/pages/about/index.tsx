import React from 'react';
import { useNavigate } from 'react-router-dom';

export function About() {
  const navigate = useNavigate();

  const handleBackWithBack = () => {
    navigate(-1);
  };

  const handleBackWithPush = () => {
    navigate('/home');
  };

  const handleBackWithReplace = () => {
    navigate('/home', { replace: true });
  };

  return (
    <div className="center">
      <span>this is about page</span>
      <br />
      <button onClick={handleBackWithBack}>back home page with navigate(history.back) back</button>
      <br />
      <button onClick={handleBackWithPush}>back home page with navigate(history.push) jump</button>
      <br />
      <button onClick={handleBackWithReplace}>back home page with navigate(history.replace) jump</button>
    </div>
  );
}

export default About;

import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function AppDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/app');
  };
  return (
    <div className="app-detail center">
      <span>this is detail No.{id}</span>
      <button onClick={handleBack}>back to app list</button>
    </div>
  );
}

export default AppDetail;

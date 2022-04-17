import React from 'react';
import { Link } from 'react-router-dom';

function AppList() {
  return (
    <div>
      <span>this is app detail</span>
      <li>
        <Link to="/app/1">this is detail NO.1</Link>
      </li>
      <li>
        <Link to="/app/2">this is detail NO.2</Link>
      </li>
    </div>
  );
}

export default AppList;

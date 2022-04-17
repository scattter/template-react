import '@/index.scss';

import React from 'react';
import { useRoutes } from 'react-router-dom';

import { routes } from './constant/router';

const App = () => {
  return useRoutes(routes);
};

export default App;

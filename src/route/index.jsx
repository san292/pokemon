import React from 'react';
import Home from '../pages/Home/Home';

import { Routes, Route } from 'react-router-dom';

const RouteIndex = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};
export default RouteIndex;

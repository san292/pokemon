import React from 'react';
import Home from '../pages/Home/Home';
import Favoris from '../pages/Favoris/Favoris';

import { Routes, Route } from 'react-router-dom';
import DetailsCard from '../pages/DetailsCard/DetailsCard';

const RouteIndex = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favoris" element={<Favoris />} />
      <Route path="/details" element={<DetailsCard />} />
    </Routes>
  );
};
export default RouteIndex;

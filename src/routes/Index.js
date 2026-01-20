import React, { useEffect } from "react";
import AOS from 'aos';
import { Routes, Route } from "react-router-dom";
import Homeone from "../components/Homeone/Main";
import Aboutus from '../components/Aboutus/Main';
import ForRestaurants from '../components/ForRestaurants/Main';

const Index = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  })
  return (
    <Routes>
      <Route path="/" element={<Homeone />} />
      <Route path="/aboutus" element={<Aboutus />} />
      <Route path="/for-restaurants" element={<ForRestaurants />} />
    </Routes>
  );
}

export default Index

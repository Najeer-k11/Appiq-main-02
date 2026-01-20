import React from 'react';
import Preloader from '../Global/Preloader';
import Header from '../Global/Header';
import Bredcrumb from '../Global/Bredcrumb';
import Hero from '../MenForRestaurants/Hero';
import WhyPartner from '../MenForRestaurants/WhyPartner';
import GetStarted from '../MenForRestaurants/GetStarted';
import Testimonials from '../MenForRestaurants/Testimonials';
import RestaurantCTA from '../MenForRestaurants/RestaurantCTA';
import Footer from '../Global/Footer';
import GoToTop from '../Global/GoToTop';

const Main = () => {
  return (
    <div>
      <Preloader />
      <Header />
      <Bredcrumb Title="For Restaurants" subtitle="Partner with Scoop" />
      <div className="page_wrapper">
        <Hero />
        <WhyPartner />
        <GetStarted />
        <Testimonials />
        <RestaurantCTA />
        <Footer />
        <GoToTop />
      </div>
    </div>
  );
};

export default Main;

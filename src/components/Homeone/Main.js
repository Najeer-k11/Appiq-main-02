import React from "react";
import Preloader from "../Global/Preloader";
import Header from "../Global/Header";
import Banner from "../Menhomeone/Banner";
import Usp from "../Menhomeone/Usp";
import Features from "../Menhomeone/Features";
import Dish from "../Menhomeone/Dish";
import Work from "../Menhomeone/Work";
import Download from "../Menhomeone/Download";
import Call from "../Global/Call";
import Footer from "../Global/Footer";
import GoToTop from "../Global/GoToTop";

const Main = () => {
  return (
    <>
      <Preloader />
      <Header />
      <Banner />
      <div className="page_wrapper">
        <Usp />
        <Features />
        <Dish />
        <Work />
        <Download />
        <Call />
        <Footer />
        <GoToTop />
      </div>
    </>
  )
}
export default Main

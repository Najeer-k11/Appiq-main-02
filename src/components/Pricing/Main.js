import React from "react";
import Preloader from "../Global/Preloader";
import Header from "../Global/Header";
import Bredcrumb from "../Global/Bredcrumb";
import Pricing from "../MenPricing/Pricing";
import FQ from "../Global/FQ";
import Download from "../Menhomeone/Download";
import Call from "../Global/Call";
import Footer from "../Global/Footer";
import GoToTop from "../Global/GoToTop";

const Main = () => {
    return (
        <>
            <Preloader />
            <Header />
            <Bredcrumb Title="Our Pricing" subtitle="Our Pricing" />
            <div className="page_wrapper">
                <Pricing />
                <FQ />
                <Download />
                <Call />
                <Footer />
                <GoToTop />
            </div>
        </>
    )
}

export default Main
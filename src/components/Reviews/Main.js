import React from "react";
import Preloader from "../Global/Preloader";
import Header from "../Global/Header";
import Bredcrumb from "../Global/Bredcrumb";
import Positive from "../Menreviews/ReviewsPositive";
import Download from "../Menhomeone/Download"
import Call from "../Global/Call";
import Footer from "../Global/Footer";
import GoToTop from "../Global/GoToTop";


const main = () => {
    return (
        <>
            <Preloader />
            <Header />
            <Bredcrumb Title="Client Reviews" subtitle="Reviews" />
            <div className="page_wrapper">
                <Positive />
                <Download />
                <Call />
                <Footer />
                <GoToTop />
            </div>

        </>
    )
}

export default main
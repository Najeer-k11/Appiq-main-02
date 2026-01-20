import React from 'react';
import Preloader from '../Global/Preloader';
import Header from '../Global/Header';
import Breadcrumb from "../Global/Bredcrumb";
import Contact from '../Mencontact/ContactUS';
import Map from '../Mencontact/Map';
import Call from '../Global/Call';
import Footer from '../Global/Footer';
import GoToTop from '../Global/GoToTop';

const Main = () => {
    return (
        <>
            <Preloader />
            <Header />
            <Breadcrumb Title="Contact Us" subtitle="Contact Us" />
            <div className="page_wrapper">
                <Contact />
                <Map />
                <Call />
                <Footer />
                <GoToTop />
            </div>
        </>
    )
}

export default Main

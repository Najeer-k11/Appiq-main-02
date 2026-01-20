import React from 'react';
import Preloader from '../Global/Preloader';
import Header from '../Global/Header';
import Bredcrumb from '../Global/Bredcrumb';
import Service from '../Menabout/Service';
import Selector from '../Menabout/Selector';
import WhoWeAre from '../Menabout/WhoWeAre';
import SomeFact from '../Menabout/SomeFact';
import WhyChoose from '../Menabout/WhyChoose';
import Testimoinal from '../Menabout/Testimoinal';
import Expert from '../Menabout/Expert';
import Downloads from '../Menhomeone/Download';
import FQ from '../Global/FQ';
import Call from '../Global/Call';
import Footer from '../Global/Footer';
import GoToTop from '../Global/GoToTop';

const Main = () => {
    return (
        <div>
            <Preloader />
            <Header />
            <Bredcrumb Title="About us" subtitle="About us" />
            <div className="page_wrapper">
                <Service />
                <Selector />
                <WhoWeAre />
                <SomeFact />
                <WhyChoose />
                <Testimoinal />
                <Expert />
                <Downloads />
                <FQ />
                <Call />
                <Footer />
                <GoToTop />
            </div>

        </div>
    )
}

export default Main

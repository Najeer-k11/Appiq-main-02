import React from 'react';
import Preloader from '../Global/Preloader';
import Header from '../Global/Header';
import Breadcrumb from '../Global/Bredcrumb';
import Blog from '../Menblog/Blog';
import Call from '../Global/Call';
import Footer from '../Global/Footer';
import GoToTop from '../Global/GoToTop';

const Main = () => {
    return (
        <>
            <Preloader />
            <Header />
            <Breadcrumb Title="Latest Blog Post" subtitle="Blog List" />
            <div className="page_wrapper">
                <Blog />
                <Call />
                <Footer />
                <GoToTop />
            </div>
        </>
    )
}

export default Main


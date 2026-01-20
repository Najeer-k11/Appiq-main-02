import React from "react";
import Preloader from "../../Global/Preloader";
import Header from "../../Global/Header";
import Bredcrumb from "../../Global/Bredcrumb";
import Bloglist from "../Menblogdetail/Bloglist";
import Comment from "../Menblogdetail/Comment";
import Form from "../Menblogdetail/Form"
import Call from "../../Global/Call";
import Footer from "../../Global/Footer";
import GoToTop from "../../Global/GoToTop";

const Main = () => {
    return (
        <>
            <Preloader />
            <Header />
            <Bredcrumb Title="Latest Blog Post" subtitle="Blog Detail" />

            <Bloglist />
            <Comment />
            <Form />
            <Call />
            <Footer />
            <GoToTop />

        </>
    )
}

export default Main
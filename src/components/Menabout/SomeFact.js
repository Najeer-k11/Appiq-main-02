import React from "react";
import services_1 from '../../assets/images/about_service_2.webp';
import { Link } from "react-router-dom";

const SomeFact = () => {
    return (
        <>
            <section className="row_am service_section about_service">
                <div className="container">
                    <div className="row service_blocks flex-row-reverse">
                        <div className="col-md-6">
                            <div
                                className="service_text right_side"
                                data-aos="fade-up"
                                data-aos-duration={1500}
                            >
                                <div className="title_badge">
                                    <span>Some Fact</span>
                                </div>
                                <h2>Why we best for food delivery.</h2>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry lorem Ipsum has been the industrys standard dummy.
                                </p>
                                <ul className="feature_list">
                                    <li>
                                        <div className="icon">
                                            <span>
                                                <i className="icofont-check-circled" />
                                            </span>
                                        </div>
                                        <div className="text">
                                            <p>Lorem Ipsum is simply dummy text</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span>
                                                <i className="icofont-check-circled" />
                                            </span>
                                        </div>
                                        <div className="text">
                                            <p>The printing and typesetting industry lorem</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span>
                                                <i className="icofont-check-circled" />
                                            </span>
                                        </div>
                                        <div className="text">
                                            <p>Has been the industrys dummy</p>
                                        </div>
                                    </li>
                                </ul>
                                <div className="btn_block">
                                    <Link to="/Aboutus" className="btn puprple_btn ml-0">
                                        Start Free Trial
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div
                                className="inner_block rotate_right"
                                data-aos="fade-up"
                                data-aos-duration={1500}
                            >
                                <div className="img">
                                    <img src={services_1} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
export default SomeFact;


import React, { useState } from "react";
import pricing1 from '../../assets/images/pricing1.webp';
import pricing2 from '../../assets/images/pricing2.webp';
import pricing3 from '../../assets/images/pricing3.webp';
import { Link } from 'react-router-dom';

const Pricing = () => {

    const [Isactive, setIsactive] = useState('monthly');

    const handleTabchange = (tab) => {
        setIsactive(tab);
    }

    return (
        <>

            <section
                className="row_am pricing_section inner_page"
                data-aos="fade-in"
                data-aos-duration={1500}
            >
                <div className="pricing_inner">

                    <div className="container">
                        <div
                            className="section_title"
                            data-aos="fade-up"
                            data-aos-duration={1500}
                            data-aos-delay={300}
                        >
                            <span className="title_badge">Pricing</span>
                            <h2>Choose the Pricing Plan</h2>
                        </div>

                        <ul
                            className="nav nav-tabs"
                            id="myTab"
                            role="tablist"
                            data-aos="fade-up"
                            data-aos-duration={1500}
                        >
                            <li className="nav-item" role="presentation">
                                <button
                                    className={`nav-link ${Isactive === 'monthly' ? 'active' : ''}`}
                                    onClick={() => handleTabchange('monthly')}
                                >
                                    Monthly
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className={`nav-link ${Isactive === 'yearly' ? 'active' : ''}`}
                                    onClick={() => handleTabchange('yearly')}
                                >
                                    Yearly
                                </button>
                            </li>
                        </ul>

                        <div className="tab-content" id="myTabContent">
                            <div
                                className={`tab-pane fade ${Isactive === 'monthly' ? 'show active' : ''}`}
                            >

                                <div className="pricing_pannel">
                                    <div className="row">

                                        <div className="col-md-4">
                                            <div
                                                className="pannel_block"
                                                data-aos="fade-up"
                                                data-aos-duration={1500}
                                            >
                                                <div className="pkg_icon">

                                                    <img src={pricing1} alt="image" />
                                                </div>
                                                <div className="heading">
                                                    <h6>Regular</h6>
                                                </div>
                                                <div className="pricing">
                                                    <h3>
                                                        $99 <span>/pm</span>
                                                    </h3>
                                                </div>
                                                <ul className="features">
                                                    <li>
                                                        <span className="icon">
                                                            <i className="icofont-check-circled" />
                                                        </span>
                                                        <p>Limited library access</p>
                                                    </li>
                                                    <li>
                                                        <span className="icon">
                                                            <i className="icofont-check-circled" />
                                                        </span>
                                                        <p>1 new meditation music every day</p>
                                                    </li>
                                                    <li>
                                                        <span className="icon">
                                                            <i className="icofont-check-circled" />
                                                        </span>
                                                        <p>Weekly inspiration video</p>
                                                    </li>
                                                    <li>
                                                        <span className="icon">
                                                            <i className="icofont-close-circled" />
                                                        </span>
                                                        <p>Personalized guide</p>
                                                    </li>
                                                    <li>
                                                        <span className="icon">
                                                            <i className="icofont-close-circled" />
                                                        </span>
                                                        <p>Report and anyalysis</p>
                                                    </li>
                                                    <li>
                                                        <span className="icon">
                                                            <i className="icofont-close-circled" />
                                                        </span>
                                                        <p>Download music and videos</p>
                                                    </li>
                                                </ul>
                                                <div className="btn_block">
                                                    <Link to="/contact" className="btn puprple_btn ml-0">
                                                        Choose Plan
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div
                                                className="pannel_block highlited_block"
                                                data-aos="fade-up"
                                                data-aos-duration={1500}
                                            >
                                                <span className="offer">Popular</span>
                                                <div className="pkg_icon">

                                                    <img src={pricing2} alt="image" />
                                                </div>
                                                <div className="heading">
                                                    <h6>Special</h6>
                                                </div>
                                                <div className="pricing">
                                                    <h3>
                                                        $199 <span>/pm</span>
                                                    </h3>
                                                </div>
                                                <ul className="features">
                                                    <li>
                                                        <span className="icon">
                                                            <i className="icofont-check-circled" />
                                                        </span>
                                                        <p>Unlimited library access</p>
                                                    </li>
                                                    <li>
                                                        <span className="icon">
                                                            <i className="icofont-check-circled" />
                                                        </span>
                                                        <p>5 new meditation music every day</p>
                                                    </li>
                                                    <li>
                                                        <span className="icon">
                                                            <i className="icofont-check-circled" />
                                                        </span>
                                                        <p>Daily inspiration video</p>
                                                    </li>
                                                    <li>
                                                        <span className="icon">
                                                            <i className="icofont-check-circled" />
                                                        </span>
                                                        <p>Personalized guide</p>
                                                    </li>
                                                    <li>
                                                        <span className="icon">
                                                            <i className="icofont-check-circled" />
                                                        </span>
                                                        <p>Premium reporting and analytics</p>
                                                    </li>
                                                    <li>
                                                        <span className="icon">
                                                            <i className="icofont-check-circled" />
                                                        </span>
                                                        <p>Download music and videos</p>
                                                    </li>
                                                </ul>
                                                <div className="btn_block">
                                                    <Link to="/contact" className="btn puprple_btn ml-0">
                                                        Choose Plan
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-4">
                                            <div
                                                className="pannel_block"
                                                data-aos="fade-up"
                                                data-aos-duration={1500}
                                            >
                                                <div className="pkg_icon">

                                                    <img src={pricing3} alt="image" />
                                                </div>
                                                <div className="heading">
                                                    <h6>Premium</h6>
                                                </div>
                                                <div className="pricing">
                                                    <h3>
                                                        $149 <span>/pm</span>
                                                    </h3>
                                                </div>
                                                <ul className="features">
                                                    <li>
                                                        <span className="icon">
                                                            <i className="icofont-check-circled" />
                                                        </span>
                                                        <p>Limited library access</p>
                                                    </li>
                                                    <li>
                                                        <span className="icon">
                                                            <i className="icofont-check-circled" />
                                                        </span>
                                                        <p>2 new meditation music every day</p>
                                                    </li>
                                                    <li>
                                                        <span className="icon">
                                                            <i className="icofont-check-circled" />
                                                        </span>
                                                        <p>Weekly inspiration video</p>
                                                    </li>
                                                    <li>
                                                        <span className="icon">
                                                            <i className="icofont-check-circled" />
                                                        </span>
                                                        <p>Personalized guide</p>
                                                    </li>
                                                    <li>
                                                        <span className="icon">
                                                            <i className="icofont-close-circled" />
                                                        </span>
                                                        <p>Report and anyalysis</p>
                                                    </li>
                                                    <li>
                                                        <span className="icon">
                                                            <i className="icofont-close-circled" />
                                                        </span>
                                                        <p>Download music and videos</p>
                                                    </li>
                                                </ul>
                                                <div className="btn_block">
                                                    <Link to="/contact" className="btn puprple_btn ml-0">
                                                        Choose Plan
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div
                                className={`tab-pane fade ${Isactive === 'yearly' ? 'show active' : ''}`}
                            >
                                <div className="row">

                                    <div className="col-md-4">
                                        <div className="pannel_block">
                                            <div className="pkg_icon">

                                                <img src={pricing1} alt="image" />
                                            </div>
                                            <div className="heading">
                                                <h6>Regular</h6>
                                            </div>
                                            <div className="pricing">
                                                <h3>
                                                    $75 <span>/PY</span>
                                                </h3>
                                            </div>
                                            <ul className="features">
                                                <li>
                                                    <span className="icon">
                                                        <i className="icofont-check-circled" />
                                                    </span>
                                                    <p>Limited library access</p>
                                                </li>
                                                <li>
                                                    <span className="icon">
                                                        <i className="icofont-check-circled" />
                                                    </span>
                                                    <p>1 new meditation music every day</p>
                                                </li>
                                                <li>
                                                    <span className="icon">
                                                        <i className="icofont-check-circled" />
                                                    </span>
                                                    <p>Weekly inspiration video</p>
                                                </li>
                                                <li>
                                                    <span className="icon">
                                                        <i className="icofont-close-circled" />
                                                    </span>
                                                    <p>Personalized guide</p>
                                                </li>
                                                <li>
                                                    <span className="icon">
                                                        <i className="icofont-close-circled" />
                                                    </span>
                                                    <p>Report and anyalysis</p>
                                                </li>
                                                <li>
                                                    <span className="icon">
                                                        <i className="icofont-close-circled" />
                                                    </span>
                                                    <p>Download music and videos</p>
                                                </li>
                                            </ul>
                                            <div className="btn_block">
                                                <Link to="/contact" className="btn puprple_btn ml-0">
                                                    Choose Plan
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div
                                            className="pannel_block highlited_block"
                                            data-aos="fade-up"
                                            data-aos-duration={1500}
                                        >
                                            <span className="offer">Popular</span>
                                            <div className="pkg_icon">

                                                <img src={pricing2} alt="image" />
                                            </div>
                                            <div className="heading">
                                                <h6>Special</h6>
                                            </div>
                                            <div className="pricing">
                                                <h3>
                                                    $149 <span>/PY</span>
                                                </h3>
                                            </div>
                                            <ul className="features">
                                                <li>
                                                    <span className="icon">
                                                        <i className="icofont-check-circled" />
                                                    </span>
                                                    <p>Unlimited library access</p>
                                                </li>
                                                <li>
                                                    <span className="icon">
                                                        <i className="icofont-check-circled" />
                                                    </span>
                                                    <p>5 new meditation music every day</p>
                                                </li>
                                                <li>
                                                    <span className="icon">
                                                        <i className="icofont-check-circled" />
                                                    </span>
                                                    <p>Daily inspiration video</p>
                                                </li>
                                                <li>
                                                    <span className="icon">
                                                        <i className="icofont-check-circled" />
                                                    </span>
                                                    <p>Personalized guide</p>
                                                </li>
                                                <li>
                                                    <span className="icon">
                                                        <i className="icofont-check-circled" />
                                                    </span>
                                                    <p>Premium reporting and analytics</p>
                                                </li>
                                                <li>
                                                    <span className="icon">
                                                        <i className="icofont-check-circled" />
                                                    </span>
                                                    <p>Download music and videos</p>
                                                </li>
                                            </ul>
                                            <div className="btn_block ">
                                                <Link to="/contact" className="btn puprple_btn ml-0">
                                                    Choose Plan
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="pannel_block">
                                            <div className="pkg_icon">

                                                <img src={pricing3} alt="image" />
                                            </div>
                                            <div className="heading">
                                                <h6>Premium</h6>
                                            </div>
                                            <div className="pricing">
                                                <h3>
                                                    $190 <span>/month</span>
                                                </h3>
                                            </div>
                                            <ul className="features">
                                                <li>
                                                    <span className="icon">
                                                        <i className="icofont-check-circled" />
                                                    </span>
                                                    <p>Limited library access</p>
                                                </li>
                                                <li>
                                                    <span className="icon">
                                                        <i className="icofont-check-circled" />
                                                    </span>
                                                    <p>2 new meditation music every day</p>
                                                </li>
                                                <li>
                                                    <span className="icon">
                                                        <i className="icofont-check-circled" />
                                                    </span>
                                                    <p>Weekly inspiration video</p>
                                                </li>
                                                <li>
                                                    <span className="icon">
                                                        <i className="icofont-check-circled" />
                                                    </span>
                                                    <p>Personalized guide</p>
                                                </li>
                                                <li>
                                                    <span className="icon">
                                                        <i className="icofont-close-circled" />
                                                    </span>
                                                    <p>Report and anyalysis</p>
                                                </li>
                                                <li>
                                                    <span className="icon">
                                                        <i className="icofont-close-circled" />
                                                    </span>
                                                    <p>Download music and videos</p>
                                                </li>
                                            </ul>
                                            <div className="btn_block">
                                                <Link to="/contact" className="btn puprple_btn ml-0">
                                                    Choose Plan
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </section>

        </>
    )
}
export default Pricing;
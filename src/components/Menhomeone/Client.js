import React from "react";
import { Link } from "react-router-dom";
import client_1 from '../../assets/images/res1.webp'
import client_2 from '../../assets/images/res2.webp'
import client_3 from '../../assets/images/res3.webp'
import client_4 from '../../assets/images/res4.webp'
import client_5 from '../../assets/images/res5.webp'
import client_6 from '../../assets/images/res6.webp'
import client_7 from '../../assets/images/res7.webp'
import client_8 from '../../assets/images/res8.webp'

const Client = () => {
    return (
        <>
            <section className="row_am our_client">
                <div className="container">

                    <div className="section_title" data-aos="fade-up" data-aos-duration={1500}>
                        <span className="title_badge">Our clients</span>
                        <h2>Trusted by 2.5k+ restaurant </h2>
                    </div>

                    <ul className="client_list">
                        <li>
                            <div
                                className="client_logo"
                                data-aos="fade-up"
                                data-aos-duration={1500}
                            >
                                <img src={client_1} alt="image" />
                            </div>
                        </li>
                        <li>
                            <div
                                className="client_logo"
                                data-aos="fade-up"
                                data-aos-duration={1500}
                            >
                                <img src={client_2} alt="image" />
                            </div>
                        </li>
                        <li>
                            <div
                                className="client_logo"
                                data-aos="fade-up"
                                data-aos-duration={1500}
                            >
                                <img src={client_3} alt="image" />
                            </div>
                        </li>
                        <li>
                            <div
                                className="client_logo"
                                data-aos="fade-up"
                                data-aos-duration={1500}
                            >
                                <img src={client_4} alt="image" />
                            </div>
                        </li>
                        <li>
                            <div
                                className="client_logo"
                                data-aos="fade-up"
                                data-aos-duration={1500}
                            >
                                <img src={client_5} alt="image" />
                            </div>
                        </li>
                        <li>
                            <div
                                className="client_logo"
                                data-aos="fade-up"
                                data-aos-duration={1500}
                            >
                                <img src={client_6} alt="image" />
                            </div>
                        </li>
                        <li>
                            <div
                                className="client_logo"
                                data-aos="fade-up"
                                data-aos-duration={1500}
                            >
                                <img src={client_7} alt="image" />
                            </div>
                        </li>
                        <li>
                            <div
                                className="client_logo"
                                data-aos="fade-up"
                                data-aos-duration={1500}
                            >
                                <img src={client_8} alt="image" />
                            </div>
                        </li>
                    </ul>

                    <div className="ctr_cta">
                        <div className="btn_block">
                            <Link to="/BlogDetail" className="btn puprple_btn ml-0">
                                Register Your Restaurant
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Client
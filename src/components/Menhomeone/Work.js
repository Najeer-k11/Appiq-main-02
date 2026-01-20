import React from "react";
import work_1 from '../../assets/images/foodA.webp'
import work_2 from '../../assets/images/foodB.webp'
import work_3 from '../../assets/images/foodC.webp'
import work_4 from '../../assets/images/how3.webp'
import work_5 from '../../assets/images/googleplay.webp'
import work_6 from '../../assets/images/appstorebtn.webp'
import work_7 from '../../assets/images/how1.webp'
import work_8 from '../../assets/images/how2.webp'
import { Link } from "react-router-dom";

const Work = () => {
    return (
        <>
            <section className="advance_feature_section row_am">
                <div className="af_innner">

                    <div className="float_element lft_side">
                        {" "}
                        <img src={work_1} alt="image" />{" "}
                    </div>

                    <div className="float_element rht_side">
                        {" "}
                        <img src={work_2} alt="image" />{" "}
                    </div>

                    <div className="float_element btm_side">
                        {" "}
                        <img src={work_3} alt="image" />{" "}
                    </div>

                    <div className="container">

                        <div className="section_title">
                            <span className="title_badge">Easy Steps</span>
                            <h2>How it Works</h2>
                            <p>
                                Get delicious discounted meals in just three simple steps. 
                                Browse, reserve, and pickup – it's that easy!
                            </p>
                        </div>

                        <div className="af_listing">

                            <div className="row">

                                <div className="col-md-12">

                                    <div className="listing_inner">

                                        <div
                                            className="af_block"
                                            data-aos="fade-up"
                                            data-aos-duration={1500}
                                        >
                                            <div className="img">
                                                <img src={work_7} alt="image" />
                                            </div>
                                            <div className="text">
                                                <h5>Browse Deals Near You</h5>
                                                <p>
                                                    {" "}
                                                    Discover amazing discounted meals from local restaurants 
                                                    closing soon. Filter by location and cuisine.
                                                </p>
                                            </div>
                                            <div className="process_num ">01</div>
                                        </div>

                                        <div
                                            className="af_block"
                                            data-aos="fade-up"
                                            data-aos-duration={1500}
                                        >
                                            <div className="img">
                                                <img src={work_8} alt="image" />
                                            </div>
                                            <div className="text">
                                                <h5>Choose Your Pickup Time</h5>
                                                <p>
                                                    {" "}
                                                    Select the deal you want and reserve your pickup slot. 
                                                    Get confirmation instantly on your phone.
                                                </p>
                                            </div>
                                            <div className="process_num">02</div>
                                        </div>

                                        <div
                                            className="af_block"
                                            data-aos="fade-up"
                                            data-aos-duration={1500}
                                        >
                                            <div className="img">
                                                <img src={work_4} alt="image" />
                                            </div>
                                            <div className="text">
                                                <h5>
                                                    {" "}
                                                    Head to Restaurant & Enjoy{" "}
                                                </h5>
                                                <p>
                                                    {" "}
                                                    Pick up your discounted meal at the scheduled time. 
                                                    No delivery fees, no waiting – just great food!
                                                </p>
                                            </div>
                                            <div className="process_num">03</div>
                                        </div>
                                    </div>

                                    <div className="ctr_app_btn_block">
                                        <p>
                                            {" "}
                                            <strong>
                                                {" "}
                                                Ready to start saving? Download the app when it launches!
                                            </strong>{" "}
                                        </p>
                                        <ul className="app_btn">
                                            <li>
                                                <Link to="#">
                                                    <img
                                                        className="blue_img"
                                                        src={work_5}
                                                        alt="image"
                                                    />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <img
                                                        className="blue_img"
                                                        src={work_6}
                                                        alt="image"
                                                    />
                                                </Link>
                                            </li>
                                        </ul>
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

export default Work

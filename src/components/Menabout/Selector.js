import React from "react";
import CountUp from 'react-countup';
import selector_1 from '../../assets/images/uspa.webp';
import selector_2 from '../../assets/images/uspb.webp';
import selector_3 from '../../assets/images/uspc.webp';
import selector_4 from '../../assets/images/uspd.webp';

const Selector = () => {
    return (
        <>
            <section
                className="why_choose row_am white_text"
                data-aos="fade-in"
                data-aos-duration={1500}
            >
                <div className="why_choose_inner">
                    <div className="blure_shape bs_1"> </div>
                    <div className="blure_shape bs_2"> </div>
                    <div className="container">
                        <div
                            className="section_title"
                            data-aos="fade-up"
                            data-aos-duration={1500}
                        >
                            <span className="title_badge">Why choos us</span>
                            <h2>Company statistics</h2>
                            <p>
                                {" "}
                                Lorem Ipsum is simply dummy text of the printing indus orem Ipsum has
                                been the industrys standard dummy text ever since.
                            </p>
                        </div>
                        <div className="company_statistics">
                            <ul
                                className="app_statstic"
                                id="counter"
                                data-aos="fade-in"
                                data-aos-duration={1500}
                            >
                                <li data-aos="fade-up" data-aos-duration={1500}>
                                    <div className="text">
                                        <div className="usp_img">
                                            <img src={selector_1} alt="image" />{" "}
                                        </div>
                                        <p>
                                            <span className="counter-value" data-count={150}>
                                                <CountUp end={150} start={0} delay={2} />
                                            </span>
                                            <span>+</span>
                                        </p>
                                        <p>Countries</p>
                                    </div>
                                </li>
                                <li data-aos="fade-up" data-aos-duration={1500}>
                                    <div className="text">
                                        <div className="usp_img">
                                            <img src={selector_2} alt="image" />{" "}
                                        </div>
                                        <p>
                                            <span className="counter-value" data-count={2300}>
                                                <CountUp end={2300} start={0} delay={2} />
                                            </span>
                                            <span>+</span>
                                        </p>
                                        <p>Reviews</p>
                                    </div>
                                </li>
                                <li data-aos="fade-up" data-aos-duration={1500}>
                                    <div className="text">
                                        <div className="usp_img">
                                            <img src={selector_3} alt="image" />{" "}
                                        </div>
                                        <p>
                                            <span className="counter-value" data-count={8}>
                                                <CountUp end={8} start={0} delay={2} />
                                            </span>
                                            <span>M+</span>
                                        </p>
                                        <p>Followers</p>
                                    </div>
                                </li>
                                <li data-aos="fade-up" data-aos-duration={1500}>
                                    <div className="text">
                                        <div className="usp_img">
                                            <img src={selector_4} alt="image" />{" "}
                                        </div>
                                        <p>
                                            <span className="counter-value" data-count={17}>
                                                <CountUp end={17} start={0} delay={2} />
                                            </span>
                                            <span>M+</span>
                                        </p>
                                        <p>Download</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Selector 
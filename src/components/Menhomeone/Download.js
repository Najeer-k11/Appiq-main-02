import React from "react";
import download_1 from '../../assets/images/black_google_play.webp'
import download_2 from '../../assets/images/black_appstore.webp'
import download_3 from '../../assets/images/our_app.webp'
import { Link } from "react-router-dom";


const Download = () => {
    return (
        <>
            <section className="row_am download_app" id="download_sec">

                <div className="task_block" data-aos="fade-up" data-aos-duration={1500}>

                    <div className="blure_shape bs_1"> </div>
                    <div className="blure_shape bs_2"> </div>

                    <div className="row">
                        <div className="col-md-6">

                            <div className="task_text">

                                <div
                                    className="section_title white_text"
                                    data-aos="fade-up"
                                    data-aos-duration={1500}
                                    data-aos-delay={100}
                                >
                                    <span className="title_badge">Download</span>
                                    <h2>Download app to enjoy 4500+ foods </h2>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing indus orem Ipsum
                                        has been the industrys.
                                    </p>
                                </div>

                                <ul className="app_btn" data-aos="fade-up" data-aos-duration={1500}>
                                    <li>
                                        <Link to="#">
                                            <img
                                                className="blue_img"
                                                src={download_1}
                                                alt="image"
                                            />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <img
                                                className="blue_img"
                                                src={download_2}
                                                alt="image"
                                            />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6">

                            <div className="task_img" data-aos="fade-in" data-aos-duration={1500}>
                                <div className="frame_img">
                                    <img src={download_3} alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </section>

        </>
    )
}

export default Download
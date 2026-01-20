import React, { useState } from "react";
import service_1 from '../../assets/images/about_service_1.webp';
import service_2 from '../../assets/images/play_white.webp';
import { Link } from "react-router-dom";

const Service = () => {

    const [ytshow, setytshow] = useState(false);


    return (
        <>
            <section className="row_am service_section about_service">
                <div className="container">
                    <div className="row service_blocks">
                        <div className="col-md-6">
                            <div
                                className="service_text"
                                data-aos="fade-up"
                                data-aos-duration={1500}
                            >
                                <div className="title_badge">
                                    <span>Overview</span>
                                </div>
                                <h2>How we serve best food on time to you in town. </h2>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typtting
                                    industry lorem Ipsum has been the industrys standard dummy text ever
                                    since.
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
                                    <li>
                                        <div className="icon">
                                            <span>
                                                <i className="icofont-check-circled" />
                                            </span>
                                        </div>
                                        <div className="text">
                                            <p>Text ever since the when an unknown </p>
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
                                className="inner_block rotate_left"
                                data-aos="fade-up"
                                data-aos-duration={1500}
                            >
                                <div className="img video_player">
                                    <img src={service_1} alt="" />
                                    <Link
                                        to="#"
                                        className="popup-youtube play-button play_icon"
                                        data-url="#"
                                        data-toggle="modal"
                                        data-target="#myModal"
                                        title="CLICK to WATCH VIDEO"
                                    >
                                        <img src={service_2} alt="img" onClick={() => setytshow(true)} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {ytshow &&
                <>
                    <div
                        className="modal fade youtube-video"
                        id="myModal"
                        tabIndex={-1}
                        style={{ display: "block", paddingRight: 17, opacity: 157 }}
                        aria-modal="true"
                        role="dialog"
                    >
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <button
                                    id="close-video"
                                    type="button"
                                    className="button btn btn-default text-right"
                                    data-dismiss="modal"
                                >
                                    <i className="icofont-close-line-circled" onClick={() => setytshow(false)} />
                                </button>
                                <div className="modal-body">
                                    <div id="video-container" className="video-container">
                                        <iframe
                                            id="youtubevideo"
                                            width={640}
                                            height={360}
                                            allowFullScreen=""
                                            src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1"
                                        />
                                    </div>
                                </div>
                                <div className="modal-footer"></div>
                            </div>
                        </div>
                    </div>



                </>

            }

        </>
    )
}

export default Service
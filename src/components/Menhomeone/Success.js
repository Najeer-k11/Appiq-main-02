import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, FreeMode } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/free-mode';
import success_1 from '../../assets/images/thumbup.webp'
import success_2 from '../../assets/images/like.webp'
import success_3 from '../../assets/images/story1.webp'
import success_4 from '../../assets/images/quote.webp'
import success_5 from '../../assets/images/story2.webp'
import success_6 from '../../assets/images/quote.webp'
import success_7 from '../../assets/images/story3.webp'
import success_8 from '../../assets/images/quote.webp'
import success_9 from '../../assets/images/story4.webp'
import success_10 from '../../assets/images/quote.webp'
import { Link } from "react-router-dom";
const success = {
    loop: true,
    margin: 20,

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        600: {
            slidesPerView: 2
        },
        1000: {
            slidesPerView: 3
        }
    }
}
const Success = () => {
    return (
        <>
            <section className="key_feature_section row_am" id="reviews_sec">
                <div className="kf_side_element left_side">
                    {" "}
                    <img src={success_1} alt="image" />{" "}
                </div>
                <div className="kf_side_element right_side">
                    {" "}
                    <img src={success_2} alt="image" />{" "}
                </div>
                <div className="key_innner">

                    <div className="container">

                        <div className="section_title">
                            <span className="title_badge">Testimonials</span>
                            <h2>Our happy clients</h2>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing indus orem Ipsum has
                                been the industrys standard dummy text ever since.
                            </p>
                        </div>

                        <Swiper
                            slidesPerView={3}
                            spaceBetween={20}
                            {...success}
                            speed={2000}

                            autoplay={{
                                delay: 1500,
                                disableOnInteraction: false,
                            }}
                            loop={true}
                            modules={[Autoplay, FreeMode]}
                            id="feature_slider "
                            className="my-swiper"

                        >

                            <SwiperSlide className="item">
                                <div className="feature_box">

                                    <div className="img">
                                        <img src={success_3} alt="image" />
                                    </div>
                                    <div className="txt_blk">
                                        <h6>Olivia Sam</h6>

                                        <div className="rating">
                                            <span>
                                                <i className="icofont-star" />
                                            </span>
                                            <span>
                                                <i className="icofont-star" />
                                            </span>
                                            <span>
                                                <i className="icofont-star" />
                                            </span>
                                            <span>
                                                <i className="icofont-star" />
                                            </span>
                                            <span>
                                                <i className="icofont-star" />
                                            </span>
                                        </div>

                                        <p>
                                            {" "}
                                            <span className="story_bold">
                                                {" "}
                                                “Delivery on time every order!”{" "}
                                            </span>{" "}
                                            Lorem Ipsum is simply dummy text of the printing the industrys
                                            standard dummytextever since.
                                        </p>
                                    </div>

                                    <div className="quote_img">
                                        <img src={success_4} alt="image" />
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide className="item">
                                <div className="feature_box">

                                    <div className="img">
                                        <img src={success_5} alt="image" />
                                    </div>
                                    <div className="txt_blk">
                                        <h6>Sandra Luna</h6>

                                        <div className="rating">
                                            <span>
                                                <i className="icofont-star" />
                                            </span>
                                            <span>
                                                <i className="icofont-star" />
                                            </span>
                                            <span>
                                                <i className="icofont-star" />
                                            </span>
                                            <span>
                                                <i className="icofont-star" />
                                            </span>
                                            <span>
                                                <i className="icofont-star" />
                                            </span>
                                        </div>

                                        <p>
                                            {" "}
                                            <span className="story_bold">
                                                {" "}
                                                “Quality and Healthy Food"{" "}
                                            </span>{" "}
                                            Simply dummy text of the printing and typesetting indus try
                                            lorem Ipsum has been the industrys standard.
                                        </p>
                                    </div>

                                    <div className="quote_img">
                                        <img src={success_6} alt="image" />
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide className="item">
                                <div className="feature_box">

                                    <div className="img">
                                        <img src={success_7} alt="image" />
                                    </div>
                                    <div className="txt_blk">
                                        <h6>Amelia Elisa</h6>

                                        <div className="rating">
                                            <span>
                                                <i className="icofont-star" />
                                            </span>
                                            <span>
                                                <i className="icofont-star" />
                                            </span>
                                            <span>
                                                <i className="icofont-star" />
                                            </span>
                                            <span>
                                                <i className="icofont-star" />
                                            </span>
                                            <span>
                                                <i className="icofont-star" />
                                            </span>
                                        </div>

                                        <p>
                                            {" "}
                                            <span className="story_bold">
                                                {" "}
                                                "Easy to use App, Much Helpfull”{" "}
                                            </span>{" "}
                                            Indus try lorem Ipsum has been the industrys standard
                                            dummytextever Print and tysetting.
                                        </p>
                                    </div>

                                    <div className="quote_img">
                                        <img src={success_8} alt="image" />
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide className="item">
                                <div className="feature_box">

                                    <div className="img">
                                        <img src={success_9} alt="image" />
                                    </div>
                                    <div className="txt_blk">
                                        <h6>Maria Sim</h6>

                                        <div className="rating">
                                            <span>
                                                <i className="icofont-star" />
                                            </span>
                                            <span>
                                                <i className="icofont-star" />
                                            </span>
                                            <span>
                                                <i className="icofont-star" />
                                            </span>
                                            <span>
                                                <i className="icofont-star" />
                                            </span>
                                            <span>
                                                <i className="icofont-star" />
                                            </span>
                                        </div>

                                        <p>
                                            {" "}
                                            <span className="story_bold"> "Supportive staff!” </span> Lorem
                                            Ipsum is simply dummy text of the printing and dummy text
                                            typesetting industry lorem Ipsum has been.
                                        </p>
                                    </div>

                                    <div className="quote_img">
                                        <img src={success_10} alt="image" />
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>

                        <div className="ctr_cta">
                            <div className="btn_block">
                                <Link to="/BlogDetail" className="btn puprple_btn ml-0">
                                    Read More Success Story
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Success
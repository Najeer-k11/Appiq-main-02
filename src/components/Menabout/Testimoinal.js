import React from "react";
import tesr_1 from "../../assets/images/thumbup2.webp"
import tesr_2 from "../../assets/images/testimonial_01.webp"
import tesr_3 from "../../assets/images/testimonial_02.webp"
import tesr_4 from "../../assets/images/testimonial_03.webp"
import { FreeMode, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const reviews = {
    loop: true,
    margin: 20,

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        600: {
            slidesPerView: 1
        },
        1000: {
            slidesPerView: 1
        }
    }
}

const Testimoinal = () => {
    return (
        <>
            <section
                className="testimonial_section"
                data-aos="fade-in"
                data-aos-duration={1500}
            >
                <div className="testimonial_inner">

                    <div className="testimonial_side_element">
                        {" "}
                        <img src={tesr_1} alt="image" />{" "}
                    </div>
                    <div className="container">
                        <div
                            className="section_title"
                            data-aos="fade-up"
                            data-aos-duration={1500}
                        >
                            <span className="title_badge">Reviews</span>
                            <h2>Client Testimonials</h2>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing indus orem Ipsum has
                                been the industrys standard dummy text ever since.
                            </p>
                        </div>
                        <div className="testimonial_slides">
                            <Swiper slidesPerView={1}
                                spaceBetween={30}
                                freeMode={true}
                                speed={2000}
                                autoplay={{
                                    delay: 1200,
                                    disableOnInteraction: false,
                                }}
                                loop={true}
                                {...reviews}
                                modules={[FreeMode, Autoplay]}
                                className="mySwiper" id="testimonial_slider">
                                <SwiperSlide className="item">
                                    <div className="testimonial_box">
                                        <div className="testi_img">
                                            <img
                                                className="user_img"
                                                src={tesr_2}
                                                alt="image"
                                            />
                                        </div>
                                        <div className="testi_text">
                                            <div className="star">
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
                                                Lorem Ipsum is simply dummy text of the printing and
                                                typesetting industry lorem Ipsum has been the standard dummy.
                                            </p>
                                            <div className="user_info">
                                                <h6>Olivia Luna, </h6>
                                                <span>New York</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="item">
                                    <div className="testimonial_box">
                                        <div className="testi_img">
                                            <img
                                                className="user_img"
                                                src={tesr_3}
                                                alt="image"
                                            />
                                        </div>
                                        <div className="testi_text">
                                            <div className="star">
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
                                                Lorem Ipsum is simply dummy text of the printing and
                                                typesetting industry lorem Ipsum has been the standard dummy.
                                            </p>
                                            <div className="user_info">
                                                <h6>Amelia Ava, </h6>
                                                <span>Chicago</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="item">
                                    <div className="testimonial_box">
                                        <div className="testi_img">
                                            <img
                                                className="user_img"
                                                src={tesr_4}
                                                alt="image"
                                            />
                                        </div>
                                        <div className="testi_text">
                                            <div className="star">
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
                                                Lorem Ipsum is simply dummy text of the printing and
                                                typesetting industry lorem Ipsum has been the standard dummy.
                                            </p>
                                            <div className="user_info">
                                                <h6>Emma Charlotte, </h6>
                                                <span>Washington</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Testimoinal
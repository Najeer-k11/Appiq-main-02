import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
const Textflow = {
    loop: true,
    margin: 10,

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        600: {
            slidesPerView: 1
        },
        1000: {
            slidesPerView: 4
        }
    }
}

const WhyChoose = () => {
    return (
        <>
            <div
                className="text_list_section tls_aboutpage row_am"
                data-aos="fade-in"
                data-aos-duration={1500}
            >
                <div className="container">
                    <span className="title_badge down_fix">Why choose our app</span>
                </div>
                <div className="slider_block">
                    <Swiper
                        slidesPerView={4}
                        speed={2000}
                        {...Textflow}
                        autoplay={{
                            delay: 0.5,
                        }}
                        loop={true}
                        modules={[Autoplay]}
                        className="my-swiper" id="text_list_flow">
                        <SwiperSlide className="item">
                            <div className="text_block">
                                <span>30 Min Delivery </span>
                                <span className="mark_star">•</span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="item">
                            <div className="text_block">
                                <span>Quality Food</span>
                                <span className="mark_star">•</span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="item">
                            <div className="text_block">
                                <span>1000+ Dishes </span>
                                <span className="mark_star">•</span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="item">
                            <div className="text_block">
                                <span> Live Map Track</span>
                                <span className="mark_star">•</span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="item">
                            <div className="text_block">
                                <span> 24/7 Support</span>
                                <span className="mark_star">•</span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="item">
                            <div className="text_block">
                                <span> 25k+ Happy Users</span>
                                <span className="mark_star">•</span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="item">
                            <div className="text_block">
                                <span>4.9 Ratings</span>
                                <span className="mark_star">•</span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="item">
                            <div className="text_block">
                                <span>500+ Restaurants</span>
                                <span className="mark_star">•</span>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>

        </>
    )
}

export default WhyChoose;
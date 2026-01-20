import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import about_1 from '../../assets/images/dish_ab1.webp';
import about_2 from '../../assets/images/dish_ab2.webp';
import about_3 from '../../assets/images/dish_ab3.webp';
import about_4 from '../../assets/images/dish_ab4.webp';
import about_5 from '../../assets/images/dish_ab5.webp';
import about_6 from '../../assets/images/dish_ab6.webp';
import about_7 from '../../assets/images/dish_ab7.webp';
import about_8 from '../../assets/images/dish_ab8.webp';
import about_9 from '../../assets/images/dish_ab9.webp';
import about_10 from '../../assets/images/dish_ab10.webp';
const Slider = {
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
            slidesPerView: 4
        }
    }
}
const WhoWeAre = () => {
    return (
        <>
            <section className="about_us_section">
                <div className="container">
                    <div className="section_title" data-aos="fade-up" data-aos-duration={1500}>
                        <span className="title_badge">Our Story</span>
                        <h2>
                            About Scoop – Revolutionizing Food Deals with Pickup Power
                        </h2>
                        <p>
                            Founded in 2025, Scoop started as a simple idea: unsold restaurant food 
                            could find a home instead of the bin. We built a platform for pickup deals 
                            to connect hungry folks with smart savings. We're on a mission to make food 
                            more affordable, reduce waste, and support local restaurants.
                        </p>
                        <p>
                            Our pickup-only model keeps it local and green, helping restaurants turn 
                            potential losses into profit while giving customers access to delicious 
                            meals at unbeatable prices.
                        </p>
                    </div>
                </div>
                <div>
                    <Swiper slidesPerView={3.5}
                        spaceBetween={10}
                        speed={2000}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: true,
                        }}
                        loop={true}
                        {...Slider}
                        modules={[Autoplay]}
                        className="mySwiper" id="about_slider">
                        <SwiperSlide className="swiper-slide" >
                            <div className="abt_slides">
                                <img src={about_1} alt="image" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="item">
                            <div className="abt_slides">
                                <img src={about_2} alt="image" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="item">
                            <div className="abt_slides">
                                <img src={about_3} alt="image" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="item">
                            <div className="abt_slides">
                                <img src={about_4} alt="image" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="item">
                            <div className="abt_slides">
                                <img src={about_5} alt="image" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="item">
                            <div className="abt_slides">
                                <img src={about_6} alt="image" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="item">
                            <div className="abt_slides">
                                <img src={about_7} alt="image" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="item">
                            <div className="abt_slides">
                                <img src={about_8} alt="image" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="item">
                            <div className="abt_slides">
                                <img src={about_9} alt="image" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="item">
                            <div className="abt_slides">
                                <img src={about_10} alt="image" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>

        </>
    )
}

export default WhoWeAre

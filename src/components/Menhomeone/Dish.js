import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import dish_1 from '../../assets/images/dish1.webp'
import dish_2 from '../../assets/images/dish2.webp'
import dish_3 from '../../assets/images/dish3.webp'
import dish_4 from '../../assets/images/dish4.webp'
import dish_5 from '../../assets/images/dish5.webp'
import dish_6 from '../../assets/images/dish6.webp'
import dish_7 from '../../assets/images/dish7.webp'
import dish_8 from '../../assets/images/dish8.webp'
import dish_9 from '../../assets/images/dish9.webp'
import dish_10 from '../../assets/images/dish10.webp'
import dish_11 from '../../assets/images/googleplay.webp'
import dish_12 from '../../assets/images/appstorebtn.webp'
import { Link } from "react-router-dom";
const Dishslider = {
  loop: true,
  margin: 10,


  breakpoints: {
    0: {
      slidesPerView: 2
    },
    600: {
      slidesPerView: 5
    },
    1000: {
      slidesPerView: 11
    }
  }
}
const Dish = () => {
  return (
    <>
      <section className="row_am dishes_section">

        <div className="container">
          {/* section title */}
          <div
            className="section_title"
            data-aos="fade-up"
            data-aos-duration={1500}
            data-aos-delay={100}
          >
            <span className="title_badge">Featured Deals!</span>
            {/* h2 */}
            <h2>Discover Amazing Deals from Local Restaurants</h2>
            {/* p */}
            <p>
              Browse delicious meals from your favorite local spots at unbeatable prices. 
              All available for quick pickup at closing time!
            </p>
          </div>
        </div>

        <div
          className="dish_slider"

          data-aos="fade-in"
          data-aos-duration={1500}
        >
          <Swiper
            slidesPerView={11}
            spaceBetween={20}
            speed={2000}
            autoplay={{
              delay: 10,
              disableOnInteraction: false,
            }}
            loop={true}
            pagination={{
              clickable: true,
            }}
            {...Dishslider}
            modules={[Autoplay]}
            className="myswiper" id="about_slider">
            <SwiperSlide className="item">
              <div className="dish_slides">
                <img src={dish_1} alt="image" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="item">
              <div className="dish_slides">
                <img src={dish_2} alt="image" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="item">
              <div className="dish_slides">
                <img src={dish_3} alt="image" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="item">
              <div className="dish_slides">
                <img src={dish_4} alt="image" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="item">
              <div className="dish_slides">
                <img src={dish_5} alt="image" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="item">
              <div className="dish_slides">
                <img src={dish_6} alt="image" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="item">
              <div className="dish_slides">
                <img src={dish_7} alt="image" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="item">
              <div className="dish_slides">
                <img src={dish_8} alt="image" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="item">
              <div className="dish_slides">
                <img src={dish_9} alt="image" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="item">
              <div className="dish_slides">
                <img src={dish_10} alt="image" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="item">
              <div className="dish_slides">
                <img src={dish_7} alt="image" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="item">
              <div className="dish_slides">
                <img src={dish_8} alt="image" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="item">
              <div className="dish_slides">
                <img src={dish_9} alt="image" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="item">
              <div className="dish_slides">
                <img src={dish_10} alt="image" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="ctr_app_btn_block">
          <p>
            {" "}
            <strong>Sign up for updates on our upcoming mobile app!</strong>{" "}
          </p>
          <ul className="app_btn">
            <li>
              <Link to="#">
                <img
                  className="blue_img"
                  src={dish_11}
                  alt="image"
                />
              </Link>
            </li>
            <li>
              <Link to="#">
                <img
                  className="blue_img"
                  src={dish_12}
                  alt="image"
                />
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default Dish

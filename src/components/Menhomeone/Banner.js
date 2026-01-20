import React from "react";
import banner_1 from '../../assets/images/hero_element_1.webp'
import banner_2 from '../../assets/images/hero_element_2.webp'
import banner_3 from '../../assets/images/googleplay.webp'
import banner_4 from '../../assets/images/appstorebtn.webp'
import banner_5 from '../../assets/images/hero_image.webp'
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <section className="banner_section" id="home_sec">

        <div className="hero_side_element left_side">
          {" "}
          <img src={banner_1} alt="image" />{" "}
        </div>
        <div className="hero_side_element right_side">
          {" "}
          <img src={banner_2} alt="image" />{" "}
        </div>
        <div className="container">
          <div className="row">
            <div
              className="col-md-12"
              data-aos="fade-up"
              data-aos-duration={1500}
            >
              <div className="banner_text">

                <h1>Discover Discounted Meals for Pickup – Save Big on Unsold Restaurant Favorites!</h1>
                <p>
                  Scoop connects you with local restaurants selling their unsold food at 
                  closing time for unbeatable prices. Pickup only – no delivery hassles. 
                  Reduce waste, grab a deal!
                </p>
                <span className="trial_txt">
                  {" "}
                  <strong>Search for deals near you and find your scoops today!</strong>{" "}
                </span>
              </div>
              <ul className="app_btn">
                <li>
                  <Link to="#">
                    <img
                      className="blue_img"
                      src={banner_3}
                      alt="image"
                    />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <img
                      className="blue_img"
                      src={banner_4}
                      alt="image"
                    />
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-md-12">
              <div className="hero_img">

                <div className="desktop">
                  <img src={banner_5} alt="image" />
                </div>

                <div className="mobile_view">
                  <img src={banner_5} alt="image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Banner

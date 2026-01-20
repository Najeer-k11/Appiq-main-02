import React from "react";
import features_1 from '../../assets/images/food1.webp'
import features_2 from '../../assets/images/food2.webp'
import features_3 from '../../assets/images/food3.webp'
import features_4 from '../../assets/images/whyicon1.webp'
import features_5 from '../../assets/images/whyicon2.webp'
import features_6 from '../../assets/images/whyicon3.webp'
import features_7 from '../../assets/images/whyicon4.webp'
import features_8 from '../../assets/images/features_frame.webp'
const Features = () => {
  return (
    <>
      <section className="row_am features_section" id="why_sec">

        <div className="container">

          <div
            className="section_title"
            data-aos="fade-up"
            data-aos-duration={1500}
            data-aos-delay={100}
          >
            <span className="title_badge">why use Scoop</span>

            <h2>Why Scoop? It's Pickup Perfection – Not Delivery!</h2>

            <p>
              Say goodbye to delivery fees and waits. Scoop is all about quick, 
              eco-friendly pickups of discounted unsold food from your favorite spots.
            </p>
          </div>
          <div className="feature_detail">

            <div className="float_element lft_side">
              {" "}
              <img src={features_1} alt="image" />{" "}
            </div>

            <div className="float_element rht_side">
              {" "}
              <img src={features_2} alt="image" />{" "}
            </div>

            <div className="float_element btm_side">
              {" "}
              <img src={features_3} alt="image" />{" "}
            </div>

            <div className="left_data feature_box">

              <div
                className="data_block color1"
                data-aos="fade-right"
                data-aos-duration={1500}
              >
                <div className="icon">
                  <img src={features_4} alt="image" />
                </div>
                <div className="text">
                  <h6>Pickup Only Focus</h6>
                  <p>
                    Grab your deals directly from the restaurant before they close. 
                    No couriers, no extra costs – just fresh food fast!
                  </p>
                </div>
              </div>

              <div
                className="data_block color2"
                data-aos="fade-right"
                data-aos-duration={1500}
              >
                <div className="icon">
                  <img src={features_5} alt="image" />
                </div>
                <div className="text">
                  <h6>Discounted Unsold Treasures</h6>
                  <p>
                    Restaurants sell what they couldn't move at prices based on costs, 
                    not retail. A win-win where you save and they earn!
                  </p>
                </div>
              </div>
            </div>

            <div className="right_data feature_box">
              <div
                className="data_block color3"
                data-aos="fade-left"
                data-aos-duration={1500}
              >
                <div className="icon">
                  <img src={features_6} alt="image" />
                </div>
                <div className="text">
                  <h6>Eco-Friendly Mission</h6>
                  <p>
                    Reduce food waste by scooping up meals that would otherwise go unused. 
                    Every pickup makes a difference!
                  </p>
                </div>
              </div>

              <div
                className="data_block color4"
                data-aos="fade-left"
                data-aos-duration={1500}
              >
                <div className="icon">
                  <img src={features_7} alt="image" />
                </div>
                <div className="text">
                  <h6>Easy for Everyone</h6>
                  <p>
                    Browse deals, choose your pickup time, and head out. 
                    Simple app experience coming soon – sign up for updates!
                  </p>
                </div>
              </div>
            </div>

            <div
              className="feature_img"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-delay={100}
            >
              <img src={features_8} alt="image" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Features

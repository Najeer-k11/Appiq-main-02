import React from 'react';
import service_1 from '../../assets/images/about_service_1.webp';

const RestaurantHero = () => {
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
                  <span>For Restaurants</span>
                </div>
                <h2>Turn Unsold Food into Extra Revenue with Scoop</h2>
                <p>
                  As a restaurant owner, you know the pain of unsold food at the end of the day. 
                  With Scoop, list those items for quick pickup at discounted prices based on your 
                  production costs, not full retail.
                </p>
                <p>
                  Attract local customers, boost your bottom line, and reduce waste – all without 
                  delivery complications. It's simple: Post your scoops, we handle the visibility.
                </p>
                <ul className="feature_list">
                  <li>
                    <div className="icon">
                      <span>
                        <i className="icofont-check-circled" />
                      </span>
                    </div>
                    <div className="text">
                      <p>Turn potential loss into profit</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span>
                        <i className="icofont-check-circled" />
                      </span>
                    </div>
                    <div className="text">
                      <p>Reduce food waste and build loyalty</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span>
                        <i className="icofont-check-circled" />
                      </span>
                    </div>
                    <div className="text">
                      <p>Pickup-only means no delivery hassles</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span>
                        <i className="icofont-check-circled" />
                      </span>
                    </div>
                    <div className="text">
                      <p>Easy integration with upcoming app</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div
                className="inner_block rotate_left"
                data-aos="fade-up"
                data-aos-duration={1500}
              >
                <div className="img">
                  <img src={service_1} alt="Restaurant Partnership" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RestaurantHero;

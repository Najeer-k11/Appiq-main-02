import React from "react";
import CountUp from 'react-countup';
import usp_1 from '../../assets/images/usp1.webp'
import usp_2 from '../../assets/images/usp2.webp'
import usp_3 from '../../assets/images/usp3.webp'
import usp_4 from '../../assets/images/usp4.webp'

const Usp = () => {
  return (
    <>
      <section className="row_am usp_section">

        <div className="blure_shape bs_1"> </div>
        <div className="blure_shape bs_2"> </div>
        <div className="inner_sec" id="counter">

          <div className="container">

            <div className="row">

              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="usp_box">
                  <div className="usp_icon">
                    <img src={usp_1} alt="image" />
                  </div>
                  <div className="usp_text">
                    <span className="counter-value" data-count={5000}>
                      <CountUp end={5000} start={0} delay={2} />
                    </span>
                    <span>+</span>
                    <p> Happy Users</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="usp_box">
                  <div className="usp_icon">
                    <img src={usp_2} alt="image" />
                  </div>
                  <div className="usp_text">
                    <span className="counter-value" data-count={1879}>
                      <CountUp end={1879} start={0} delay={2} />
                    </span>
                    <span>+</span>
                    <p> Positive Reviews </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="usp_box">
                  <div className="usp_icon">
                    <img src={usp_3} alt="image" />
                  </div>
                  <div className="usp_text">
                    <span className="counter-value" data-count={3855}>
                      <CountUp end={3855} start={0} delay={2} />
                    </span>
                    <span>+</span>
                    <p> Restaurant Listings </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="usp_box">
                  <div className="usp_icon">
                    <img src={usp_4} alt="image" />
                  </div>
                  <div className="usp_text">
                    <span className="counter-value" data-count={985}>
                      <CountUp end={985} start={0} delay={2} />
                    </span>
                    <span>M+</span>
                    <p> Successful deliveries</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Usp;

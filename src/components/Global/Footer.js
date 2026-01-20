import React from "react";
import { Link } from "react-router-dom"
import footer_1 from '../../assets/images/logo.webp'
import footer_2 from '../../assets/images/googleplay.webp'
import footer_3 from '../../assets/images/appstorebtn.webp'

const Footer = () => {
    return (
        <>
            <footer>
                <div className="top_footer" id="contact">
                    {/* container start */}
                    <div className="container">
                        {/* row start */}
                        <div className="row">
                            {/* footer link 1 */}
                            <div className="col-lg-5 col-md-6 col-12">
                                <div className="abt_side">
                                    <div className="logo">
                                        {" "}
                                        <img src={footer_1} alt="image" />
                                    </div>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry lorem sum has been the industrys standard dummytext ever
                                        since the when an unknown printer took.{" "}
                                    </p>
                                    <ul className="app_btn">
                                        <li>
                                            <Link to="#">
                                                <img src={footer_3} alt="image" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#">
                                                <img src={footer_2} alt="image" />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* footer link 2 */}
                            <div className="col-lg-2 col-md-6 col-12">
                                <div className="links">
                                    <h5>Quick Links</h5>
                                    <ul>
                                        <li>
                                            <Link to="/">Home</Link>
                                        </li>
                                        <li>
                                            <Link to="/Aboutus">About us</Link>
                                        </li>
                                        <li>
                                            <Link to="/Pricing">Pricing</Link>
                                        </li>
                                        <li>
                                            <Link to="/Blog">Blog</Link>
                                        </li>
                                        <li>
                                            <Link to="/Contact">Contact us</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* footer link 3 */}
                            <div className="col-lg-2 col-md-6 col-12">
                                <div className="links">
                                    <h5>Support</h5>
                                    <ul>
                                        <li>
                                            <Link to="#">FAQs</Link>
                                        </li>
                                        <li>
                                            <Link to="#">Support</Link>
                                        </li>
                                        <li>
                                            <Link to="#">How it works</Link>
                                        </li>
                                        <li>
                                            <Link to="#">Terms &amp; conditions</Link>
                                        </li>
                                        <li>
                                            <Link to="#">Privacy policy</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* footer link 4 */}
                            <div className="col-lg-3 col-md-6 col-12">
                                <h5>Subscribe us</h5>
                                <div className="news_letter">
                                    <p>
                                        Subscribe our newsleter to receive latest updates regularly from
                                        us!
                                    </p>
                                    <form>
                                        <div className="form-group">
                                            <input
                                                type="email"
                                                className="form-control"
                                                placeholder="Enter your email"
                                            />
                                            <button className="btn" aria-label="subscribe">
                                                <i className="icofont-paper-plane" />
                                            </button>
                                        </div>
                                        <p className="note">
                                            By clicking send link you agree to receive message.
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                        {/* row end */}
                    </div>
                    {/* container end */}
                    {/* last footer */}
                    <div className="bottom_footer">
                        {/* container start */}
                        <div className="container">
                            {/* row start */}
                            <div className="row">
                                <div className="col-md-4">
                                    <p>© Copyrights 2024. All rights reserved.</p>
                                </div>
                                <div className="col-md-4">
                                    <ul className="social_media">
                                        <li>
                                            <Link
                                                to="https://themeforest.net/user/kalanidhithemes/portfolio"
                                                aria-label="facebook page"
                                            >
                                                <i className="icofont-facebook" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="https://www.behance.net/kalanidhithemes"
                                                aria-label="twitter page"
                                            >
                                                <i className="icofont-twitter" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="https://themeforest.net/user/kalanidhithemes/portfolio"
                                                aria-label="instagram page"
                                            >
                                                <i className="icofont-instagram" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="https://themeforest.net/user/kalanidhithemes/portfolio"
                                                aria-label="pinterest page"
                                            >
                                                <i className="icofont-pinterest" />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-4">
                                    <p className="developer_text">
                                        Design &amp; developed by{" "}
                                        <Link
                                            to="https://themeforest.net/user/kalanidhithemes/portfolio"
                                            target="blank"
                                        >
                                            Kalanidhi Themes
                                        </Link>
                                    </p>
                                </div>
                            </div>
                            {/* row end */}
                        </div>
                        {/* container end */}
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer
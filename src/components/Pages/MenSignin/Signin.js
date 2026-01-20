import React from "react";
import { Link } from "react-router-dom";
import signin_1 from "../../../assets/images/logo.webp"
import signin_2 from "../../../assets/images/google_G.svg"
import signin_3 from "../../../assets/images/sign_in_screen.webp"

const Signin = () => {
    return (
        <>
            <section className="signup_section">
                <div className="container">
                    <div className="top_part">
                        <Link to="/" className="back_btn">
                            <i className="icofont-arrow-left" /> Back to home
                        </Link>
                        <Link to="/" className="navbar-brand">
                            <img src={signin_1} alt="image" />
                        </Link>
                    </div>

                    <div className="form_block">
                        <div className="form_side">
                            <div className="section_title">
                                <span className="title_badge">Welcome Back</span>
                                <h3>Sign in to your account</h3>
                                <p>Quickly access your products and features.</p>
                            </div>
                            <form>
                                <div className="form-group">
                                    <input type="email" className="form-control" placeholder="Email" />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Password"
                                    />
                                </div>
                                <div className="forgate_check">
                                    <div className="coustome_checkbox">
                                        <label htmlFor="remamber_check">
                                            <input type="checkbox" id="remamber_check" />
                                            <span className="checkmark" />
                                            Remember for 30 days
                                        </label>
                                    </div>
                                    <Link to="#">Forgot password ?</Link>
                                </div>
                                <div className="btn_block">
                                    <button className="btn puprple_btn ml-0">Sign Up Now</button>
                                </div>
                                <button className="btn google_btn">
                                    <img src={signin_2} alt="image" /> Sign Up with Google
                                </button>
                                <div className="sign_in_here">
                                    <p>
                                        Don’t have an account? <Link to="sign-up.html">Sign Up here</Link>
                                    </p>
                                </div>
                            </form>
                        </div>
                        <div className="side_screen">
                            <div className="scrren">
                                <img src={signin_3} alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Signin
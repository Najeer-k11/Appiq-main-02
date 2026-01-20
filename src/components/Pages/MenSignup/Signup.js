import React from 'react'
import { Link } from "react-router-dom";
import Signup_1 from "../../../assets/images/logo.webp"
import Signup_2 from "../../../assets/images/google_G.svg"
import Signup_3 from "../../../assets/images/sign_in_screen.webp"

const Signup = () => {
    return (
        <>
            <div className="full_bg">
                <section className="signup_section">
                    <div className="container">
                        <div className="top_part">
                            <Link to="/" className="back_btn">
                                <i className="icofont-arrow-left" /> Back to home
                            </Link>
                            <Link to="/" className="navbar-brand">
                                <img src={Signup_1} alt="image" />
                            </Link>
                        </div>

                        <div className="form_block">
                            <div className="form_side">
                                <div className="section_title">
                                    <span className="title_badge">Get Started</span>
                                    <h3>Create an account</h3>
                                    <p>
                                        Fill all fields so we can get some info about you. We'll never
                                        send you spam
                                    </p>
                                </div>
                                <form>
                                    <div className="form-group">
                                        <input type="name" className="form-control" placeholder="Name" />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="Email"
                                        />
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
                                                <span className="checkmark" />I agree to all Term, Privacy and
                                                Fees
                                            </label>
                                        </div>
                                    </div>
                                    <div className="btn_block">
                                        <button className="btn puprple_btn ml-0">Sign Up Now</button>
                                    </div>
                                    <button className="btn google_btn">
                                        <img src={Signup_2} alt="image" /> Sign Up with Google
                                    </button>
                                    <div className="sign_in_here">
                                        <p>
                                            Already have an account? <Link to="/Signin">Sign In here</Link>
                                        </p>
                                    </div>
                                </form>
                            </div>
                            <div className="side_screen">
                                <div className="scrren">
                                    <img src={Signup_3} alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}
export default Signup

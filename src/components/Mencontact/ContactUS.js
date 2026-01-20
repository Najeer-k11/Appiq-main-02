import React from "react";
import contact_1 from "../../assets/images/mail_icon.webp"
import contact_2 from "../../assets/images/call_icon.webp"
import contact_3 from "../../assets/images/location_icon.webp"
import contact_4 from "../../assets/images/ticket.webp"
import { Link } from "react-router-dom";

const ContactUS = () => {
    return (
        <>
            <section className="row_am contact_page_section">
                <div className="container">
                    <div className="contact_inner">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="contact_info">
                                    <div className="section_title">
                                        <h3>Contact informations</h3>
                                        <p>Get in touch with us.</p>
                                    </div>
                                    <ul className="contact_info_list">
                                        <li>
                                            <div className="img">
                                                <img src={contact_1} alt="image" />
                                            </div>
                                            <div className="text">
                                                <span>Email Us</span>
                                                <Link to="mailto:example@gmail.com">support@gmail.com</Link>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="img">
                                                <img src={contact_2} alt="image" />
                                            </div>
                                            <div className="text">
                                                <span>Call Us</span>
                                                <Link to="tel:+1(888)553-46-11"> +1 (456) 125-45-678 </Link>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="img">
                                                <img src={contact_3} alt="image" />
                                            </div>
                                            <div className="text">
                                                <span>Visit Us</span>
                                                <p>Fincop Ltd. 185, Finance Hub, Chikago, USA 4647</p>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="ticket_box">
                                        <div className="icon">
                                            <img src={contact_4} alt="image" />
                                        </div>
                                        <div className="section_title">
                                            <h3>Generate Ticket</h3>
                                            <p>
                                                Need support for our application, service, payment or company,
                                                Please generate ticket.
                                            </p>
                                        </div>
                                        <Link to="#" className="btn puprple_btn">
                                            Generate Ticket Now
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="contact_form">
                                    <div className="section_title">
                                        <h3>Message us</h3>
                                        <p> Fill up form below, our team will get back soon </p>
                                    </div>
                                    <form action="#">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                placeholder="Name"
                                                className="form-control"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="email"
                                                placeholder="Email"
                                                className="form-control"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <select className="form-control">
                                                <option value="">India</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                placeholder="Phone"
                                                className="form-control"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <textarea
                                                className="form-control"
                                                placeholder="Your message"
                                                defaultValue={""}
                                            />
                                        </div>
                                        <div className="form-group term_check">
                                            <input type="checkbox" id="term" />
                                            <label htmlFor="term">I agree to terms and conditions.</label>
                                        </div>
                                        <div className="form-group mb-0">
                                            <button type="submit" className="btn puprple_btn">
                                                Submit your Message
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default ContactUS
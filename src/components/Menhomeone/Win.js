import React from "react";
import { Link } from "react-router-dom";
import win_1 from '../../assets/images/win1.webp'
import win_2 from '../../assets/images/win2.webp'

const windata = [
    {
        image: win_1,
        heading: 'Win-win for restaurants &amp; users alike',
        text: ' Lorem Ipsum is simply dummy text of the printing indus orem Ipsum has been the industrys standard dummy text ever since.',
        option_1: 'Handling of orders',
        option_2: 'Sale system connectivity',
        option_3: 'Upfront payment by customers',
        option_4: 'More orders'
    },
    {
        image: win_2,
        heading: 'Effortless management of restaurant operations',
        text: ' Lorem Ipsum is simply dummy text of the printing indus orem Ipsum has been the industrys standard dummy text ever since.',
        option_1: 'Handling of orders',
        option_2: 'Sale system connectivity',
        option_3: 'Upfront payment by customers',
        option_4: 'More orders'
    }
]

const Win = () => {
    return (
        <>
            <section className="winwin_section row_am" id="benefits_sec">

                <div className="container">

                    <div className="win_listing">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="listing_inner">
                                    {windata.map((data, index) =>
                                        <div key={index}
                                            className="win_block"
                                            data-aos="fade-up"
                                            data-aos-duration={1500}
                                        >
                                            <div className="img">
                                                <img src={data.image} alt="image" />
                                            </div>
                                            <div className="text">
                                                <h4>{data.heading}</h4>
                                                <p>
                                                    {data.text}
                                                </p>
                                                <ul className="win_list">
                                                    <li>
                                                        <div className="icon">
                                                            <span>
                                                                <i className="icofont-check-circled" />
                                                            </span>
                                                        </div>
                                                        <div className="li_text">
                                                            <p>{data.option_1}</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="icon">
                                                            <span>
                                                                <i className="icofont-check-circled" />
                                                            </span>
                                                        </div>
                                                        <div className="li_text">
                                                            <p>{data.option_2}</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="icon">
                                                            <span>
                                                                <i className="icofont-check-circled" />
                                                            </span>
                                                        </div>
                                                        <div className="li_text">
                                                            <p>{data.option_3}</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="icon">
                                                            <span>
                                                                <i className="icofont-check-circled" />
                                                            </span>
                                                        </div>
                                                        <div className="li_text">
                                                            <p>{data.option_4}</p>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <div className="btn_block">
                                                    <Link to="/" className="btn puprple_btn ml-0">
                                                        Register Your Restaurant
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

        </>
    )
}

export default Win
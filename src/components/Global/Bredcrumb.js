import React from "react";
import bredcrumb_1 from '../../assets/images/banner-shape1.webp';
import bredcrumb_2 from '../../assets/images/banner-shape2.webp';
import { Link } from "react-router-dom";

const Bredcrumb = ({ Title, subtitle }) => {
    return (
        <>
            <div className="bred_crumb">
                <div className="container">
                    {/* banner shapes  */}
                    <span className="banner_shape1">
                        {" "}
                        <img src={bredcrumb_1} alt="image" />{" "}
                    </span>
                    <span className="banner_shape2">
                        {" "}
                        <img src={bredcrumb_2} alt="image" />{" "}
                    </span>
                    <div className="bred_text">
                        <h1>{Title}</h1>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <span>»</span>
                            </li>
                            <li>
                                <Link to="/aboutus">{subtitle}</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Bredcrumb
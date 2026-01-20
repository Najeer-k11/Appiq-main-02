import React from "react";
import expert_1 from "../../assets/images/team_01.webp"
import expert_2 from "../../assets/images/team_02.webp"
import expert_3 from "../../assets/images/team_03.webp"
import { Link } from "react-router-dom";

const Expertdata = [
    {
        image: expert_1,
        name: 'Willium Scott',
        position: 'CEO',
        post: 'Managing Director'
    },
    {
        image: expert_2,
        name: 'Averill Rack',
        position: 'Team Lead'
    },
    {
        image: expert_3,
        name: 'Geo Back',
        position: 'Product Manager'


    }
]
const Expert = () => {
    return (
        <>
            <section className="row_am experts_team_section">
                <div className="container">
                    <div className="section_title" data-aos="fade-up" data-aos-duration={1500}>
                        <span className="title_badge">Experts</span>
                        <h2>Meet our team</h2>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing indus orem Ipsum has
                            been the industrys standard dummy text ever since.
                        </p>
                    </div>
                    <div className="row">
                        {Expertdata.map((data, index) =>
                            <div key={index}
                                className="col-md-4"
                                data-aos="fade-up"
                                data-aos-duration={1500}
                                data-aos-delay={100}
                            >
                                <div className="experts_box">
                                    <img src={data.image} alt="image" />
                                    <div className="text">
                                        <h6>{data.name} </h6>
                                        <span>{data.position} &amp; {data.post}</span>
                                        <ul className="social_media">
                                            <li>
                                                <Link to="#">
                                                    <i className="icofont-facebook" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <i className="icofont-twitter" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <i className="icofont-instagram" />
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

        </>
    )
}

export default Expert
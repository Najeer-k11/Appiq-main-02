import React from "react";
import comment_1 from "../../../assets/images/blog_d01.webp"
import comment_2 from "../../../assets/images/blog_d02.webp"
import comment_3 from "../../../assets/images/blog_d03.webp"
const Comment = () => {
    return (
        <>
            <section
                className="row_am comment_section pb-0"
                data-aos="fade-up"
                data-aos-duration={1500}
            >
                <div className="container container-sm">
                    <div className="comment_block">
                        <div className="section_title">
                            <h3>3 Comments</h3>
                        </div>
                        <ul>
                            <li>
                                <div className="authore_info">
                                    <div className="avtar">
                                        <img src={comment_1} alt="image" />
                                    </div>
                                    <div className="text">
                                        <span>50 min ago</span>
                                        <h4>Lara </h4>
                                    </div>
                                </div>
                                <div className="comment">
                                    <p>
                                        Lorem Ipsum has been the industrys standard dummy text ever since
                                        the when an unknown printer took a galley of type and scrambled.
                                        Survived not.
                                    </p>
                                </div>
                            </li>
                            <li className="replay_comment">
                                <div className="authore_info">
                                    <div className="avtar">
                                        <img src={comment_2} alt="image" />
                                    </div>
                                    <div className="text">
                                        <span>3 hours ago</span>
                                        <h4>Willium</h4>
                                    </div>
                                </div>
                                <div className="comment">
                                    <p>
                                        Industrys standard dummy text ever since the when an unknown
                                        printer took.
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="authore_info">
                                    <div className="avtar">
                                        <img src={comment_3} alt="image" />
                                    </div>
                                    <div className="text">
                                        <span>1 day ago</span>
                                        <h4>Maria</h4>
                                    </div>
                                </div>
                                <div className="comment">
                                    <p>
                                        Has been the industrys standard dummy text ever since the when an
                                        unknown printer took a galley of type and scrambled. Survived not
                                        only five centuries.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Comment
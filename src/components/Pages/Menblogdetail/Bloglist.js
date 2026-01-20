import React from "react";
import List_1 from "../../../assets/images/blog_single_01.webp"
import List_2 from "../../../assets/images/blog_single_03.webp"
import { Link } from "react-router-dom";


const Bloglist = () => {
    return (
        <>
            <section className="blog_detail_section">
                <div className="container container-sm">
                    <div className="blog_block">
                        <div className="blog_head">
                            <h2>
                                Freshly prepared meals, tailored to your needs, delivered daily!
                            </h2>
                            <div className="tags_info">
                                <ul className="blog_info">
                                    <li>By: Admin</li>
                                    <li>17 Dec, 2024</li>
                                    <li>90 Comments</li>
                                    <li>803 Views</li>
                                </ul>
                            </div>
                        </div>
                        <div className="blog_body">
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry lorem Ipsum has been the industrys standard dummy text ever
                                since the when an unknown printer took a galley of type and scrambled
                                it to make a type specimen book. It has survived not only five
                                centuries.
                            </p>
                            <h4>Fresh, flavorful dishes delivered daily!</h4>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry lorem Ipsum has been the industrys standard dummy text ever
                                since the when an unknown printer took a galley of type and scrambled
                                it to make a type specimen book. It has survived not only five
                                centuries.
                            </p>
                            <div className="img" data-aos="fade-in" data-aos-duration={1500}>
                                <img src={List_1} alt="image" />
                            </div>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry lorem Ipsum has been the industrys standard dummy text ever
                                since the when an unknown printer took a galley of type and scrambled
                                it to make a type specimen book. It has survived not only five
                                centuries, but also the leap into electronic typesetting, remaining
                                essentially unchanged. It was popularised in the 1960s with the
                                release of Letraset sheets containing Lorem Ipsum passages, and more
                                recently with desktop publishing software like Aldus PageMaker.
                            </p>
                            <h4>Why Choose us ?</h4>
                            <p>
                                It as been the standard dummy text ever since the when an unknown
                                printer took a galley of type and scrambled it to make a type specimen
                                book. It has survived not only five centuries.
                            </p>
                            <ul className="listings">
                                <li>
                                    <span className="icon">
                                        <i className="icofont-check-circled" />
                                    </span>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting
                                    </p>
                                </li>
                                <li>
                                    <span className="icon">
                                        <i className="icofont-check-circled" />
                                    </span>
                                    <p>
                                        Tdummy text ever since the when an unknown printer took a galley
                                    </p>
                                </li>
                                <li>
                                    <span className="icon">
                                        <i className="icofont-check-circled" />
                                    </span>
                                    <p>It was popularised in the 1960s with the release of Letraset</p>
                                </li>
                                <li>
                                    <span className="icon">
                                        <i className="icofont-check-circled" />
                                    </span>
                                    <p>Standard dummy text ever since the when an unknown</p>
                                </li>
                            </ul>
                            <div className="img" data-aos="fade-in" data-aos-duration={1500}>
                                <img src={List_2} alt="image" />
                            </div>
                            <h4>Mastering Nutrition</h4>
                            <p>
                                Typesetting industry lorem Ipsum has been the industrys standard dummy
                                text ever since the when an unknown printer took a galley of type and
                                scrambled. Survived not only five centuries, but also the leap into
                                electronic typesetting, remaining essen tially unchanged. It was
                                popularised in the 1960s with the release of Letraset sheets
                                containing Lorem Ipsum passages, and more recently with software like
                                Aldus PageMaker.
                            </p>
                            <div className="yt_video" data-aos="fade-in" data-aos-duration={1500}>
                                <iframe
                                    src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1"
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen=""
                                />
                            </div>
                            <h4>Some Facts About us</h4>
                            <p>
                                Lorem Ipsum has been the industrys standard dummy text ever since the
                                when an unknown printer took a galley of type and scrambled. Survived
                                not only five centuries, but also the leap into electronic
                                typesetting, remaining essen tially unchanged. It was popularised in
                                the 1960s with the release of Letraset sheets containing Lorem Ipsum
                                passages, and more recently with software like Aldus PageMaker sheets
                                containing.
                            </p>
                            <div className="highlight_text">
                                <h6>
                                    “ Lorem Ipsum has been the industrys standard dummy text ever since
                                    when an unknown printer took a galley of type and scrambled.”
                                </h6>
                            </div>
                            <p>
                                Standard dummy text ever since the when an unknown printer took a
                                galley of type and scrambled. Survived not only five centuries, but
                                also the leap into electronic typesetting, remaining essen tially
                                unchanged. It was popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages, and more recently
                                with software like Aldus PageMaker sheets containing It was
                                popularised in the 1960s with the release of Letraset sheets
                                containing Lorem Ipsum passages.
                            </p>
                            <div className="tags_info">
                                <span className="tag">Nutrition</span>{" "}
                                <span className="tag">Diet</span>{" "}
                                <span className="tag">Weight Loss</span>
                            </div>
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
                                <li>
                                    <Link to="#">
                                        <i className="icofont-pinterest" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Bloglist
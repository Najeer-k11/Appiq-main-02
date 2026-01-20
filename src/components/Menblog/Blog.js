import React from "react";
import { Link } from "react-router-dom";
import blog_1 from '../../assets/images/editor-choice.webp';
import blog_2 from '../../assets/images/blog1.webp'
import blog_3 from '../../assets/images/blog2.webp'
import blog_4 from '../../assets/images/blog3.webp'
import blog_5 from '../../assets/images/blog4.webp'
import blog_6 from '../../assets/images/blog5.webp'
import blog_7 from '../../assets/images/blog6.webp'

const BlogData = [
    {
        image: blog_2,
        date: 'Sep 27, 2024',
        name: 'By: Admin',
        comment: '8 Comments',
        text: 'Healthy, delicious meals delivered fast—customized just for you.',
        tag: 'Nutrition'
    },
    {
        image: blog_3,
        date: 'Sep 27, 2024',
        name: 'By: Admin',
        comment: '12 Comments',
        text: ' Personalized nutrition made easy with doorstep meal delivery.',
        tag: 'Diet Plan'
    },
    {
        image: blog_4,
        date: 'Sep 27, 2024',
        name: 'By: Admin',
        comment: '8 Comments',
        text: 'Fresh, flavorful dishes delivered to match your lifestyle goals.',
        tag: 'Nutrition'
    },
    {
        image: blog_5,
        date: 'Sep 27, 2024',
        name: 'By: Admin',
        comment: '12 Comments',
        text: 'Convenient, tailored meal plans delivered to your door daily.',
        tag: 'Diet Plan'
    },
    {
        image: blog_6,
        date: 'Sep 27, 2024',
        name: 'By: Admin',
        comment: '8 Comments',
        text: ' Fresh, flavorful dishes delivered to match your lifestyle goals.',
        tag: 'Nutrition'
    },
    {
        image: blog_7,
        date: 'Sep 27, 2024',
        name: 'By: Admin',
        comment: '12 Comments',
        text: 'Convenient, tailored meal plans delivered to your door daily.',
        tag: 'Diet Plan'
    }
]

const Blog = () => {
    return (
        <>
            <section className="blog_section row_am">
                <div className="container">
                    <div className="blog_listing inner_page">
                        <div className="blog_post editor_choice">
                            <span className="choice_badge">
                                EDITOR
                                <br />
                                CHOICE
                            </span>
                            <div className="col-lg-6" data-aos="fade-in" data-aos-duration={1500}>
                                <div className="blog_img">
                                    <img src={blog_1} alt="image" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="text">
                                    <ul className="blog_info">
                                        <li>Sep 27, 2024</li>
                                        <li>By : Admin</li>
                                        <li>8 Comments</li>
                                    </ul>
                                    <h5>
                                        <Link to="/BlogDetail">
                                            Freshly prepared meals, tailored to your needs, delivered daily!
                                        </Link>
                                    </h5>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typtting
                                        industry lorem Ipsum has been the industrys standard dummy.
                                    </p>
                                    <div className="tag_more">
                                        <span className="tag">Nutrition</span>
                                        <Link to="/BlogDetail">
                                            Read more <i className="icofont-arrow-right" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {BlogData.map((data, index) =>
                            <div key={index} className="blog_post" data-aos="fade-up" data-aos-duration={1500}>
                                <Link to="#" className="img">
                                    <img src={data.image} alt="image" />
                                </Link>
                                <div className="text">
                                    <ul className="blog_info">
                                        <li>{data.date}</li>
                                        <li>{data.name}</li>
                                        <li>{data.comment}</li>
                                    </ul>
                                    <h5>
                                        <Link to="/BlogDetail">
                                            {data.text}
                                        </Link>
                                    </h5>
                                    <div className="tag_more">
                                        <span className="tag">{data.tag}</span>
                                        <Link to="BlogDetail">
                                            Read more <i className="icofont-arrow-right" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div
                        className="pagination_block"
                        data-aos="fade-in"
                        data-aos-duration={1500}
                    >
                        <ul>
                            <li>
                                <Link to="#" className="prev">
                                    <i className="icofont-arrow-left" /> Prev
                                </Link>
                            </li>
                            <li>
                                <Link to="#">1</Link>
                            </li>
                            <li>
                                <Link to="#" className="active">
                                    2
                                </Link>
                            </li>
                            <li>
                                <Link to="#">3</Link>
                            </li>
                            <li>
                                <Link to="#">4</Link>
                            </li>
                            <li>
                                <Link to="#">5</Link>
                            </li>
                            <li>
                                <Link to="#">6</Link>
                            </li>
                            <li>
                                <Link to="#" className="next">
                                    Next <i className="icofont-arrow-right" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>


        </>
    )
}

export default Blog
import React from "react";
import blog_1 from '../../assets/images/blog1.webp'
import blog_2 from '../../assets/images/blog2.webp'
import { Link } from "react-router-dom";

const blogdata = [
    {
        image: blog_1,
        name: 'Admin',
        date: 'oct 13, 2024',
        comment: '25 Comments',
        heading: 'Top Tips for Choosing the Best Food Delivery App for Your Needs.',
        tag: 'Food at home'
    },
    {
        image: blog_2,
        name: 'Cyrus',
        date: 'Oct 05, 2024',
        comment: '19 Comments',
        heading: 'How Our App Supporting Local Restaurants and Small Businesses.',
        tag: 'Free Delivery'
    }
]

const Blog = () => {
    return (
        <>
            <section className="blog_section row_am">
                <div className="container">

                    <div className="section_title" data-aos="fade-up" data-aos-duration={1500}>
                        <span className="title_badge">Blog Post</span>
                        <h2>Insights &amp; inspirations</h2>
                    </div>

                    <div className="blog_listing">
                        {blogdata.map((data, index) =>
                            <div key={index} className="blog_post" data-aos="fade-up" data-aos-duration={1500}>

                                <Link to="#" className="img">
                                    <img src={data.image} alt="image" />
                                </Link>
                                <div className="text">

                                    <ul className="blog_info">
                                        <li>{data.name}</li>
                                        <li>{data.date}</li>
                                        <li>{data.comment}</li>
                                    </ul>
                                    <h5>
                                        <Link to="#">
                                            {data.heading}
                                        </Link>
                                    </h5>
                                    <div className="tag_more">
                                        <span className="tag">{data.tag}</span>
                                        <Link to="#">
                                            Read more <i className="icofont-arrow-right" />
                                        </Link>
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

export default Blog
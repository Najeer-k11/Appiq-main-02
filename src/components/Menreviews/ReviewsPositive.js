import React from "react";
import positive_1 from '../../assets/images/review1.webp'
import positive_2 from '../../assets/images/review2.webp'
import positive_3 from '../../assets/images/review3.webp'
import positive_4 from '../../assets/images/review4.webp'
import positive_5 from '../../assets/images/review5.webp'
import positive_6 from '../../assets/images/review6.webp'
import positive_7 from '../../assets/images/review7.webp'

const reviewdata = [
    {
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente culpa, dolores ullam laudantium deleniti ipsa qui saepe voluptatum nam pariatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, totam.',
        image: positive_1,
        name: 'Willium Joy',
        position: 'Smartbrain Tech'
    },
    {
        text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente culpa, dolores ullam laudantium deleniti ipsa qui saepe voluptatu nam pariatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur et, nemo distinctio eum omnis quam!',
        image: positive_2,
        name: 'John Due',
        position: 'Corporate Agency'
    },
    {
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente culpa, dolores ullam laudantium deleniti ipsa qui saepe voluptatum nam pariatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, totam.',
        image: positive_3,
        name: 'Maria',
        position: 'Company Inc'
    },
    {
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente culpa, dolores ullam laudantium deleniti ipsa qui saepe voluptatum nam pariatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, totam.',
        image: positive_4,
        name: 'Willium Joy',
        position: 'Smartbrain Tech'
    },
    {
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente culpa, dolores ullam laudantium deleniti ipsa qui saepe voluptatum nam pariatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, totam.',
        image: positive_5,
        name: 'Willium Joy',
        position: 'Smartbrain Tech'
    },
    {
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente culpa, dolores ullam laudantium deleniti ipsa qui saepe voluptatum nam pariatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, totam.',
        image: positive_6,
        name: 'John Due',
        position: 'Corporate Agency'
    },
    {
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente culpa, dolores ullam laudantium deleniti ipsa qui saepe voluptatum nam pariatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, totam.',
        image: positive_7,
        name: 'Maria',
        position: 'Company Inc'
    },
    {
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente culpa, dolores ullam laudantium deleniti ipsa qui saepe voluptatum nam pariatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, totam.',
        image: positive_1,
        name: 'Willium Joy',
        position: 'Smartbrain Tech'
    }

]

const ReviewsPositive = () => {
    return (
        <>
            <section className="review_section row_am page_ban">
                <div className="container">
                    <div className="section_title" data-aos="fade-up" data-aos-duration={1500}>
                        <span className="title_badge">Reviews</span>
                        <h2>Words from trusted peoples </h2>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing indus orem Ipsum has
                            been the industrys standard dummy text ever since.
                        </p>
                    </div>
                    <div className="positive_inner in_page">
                        <div className="row">
                            <div className="review_side innerpage_block">
                                {reviewdata.map((data, index) =>
                                    <div key={index}
                                        className="review_block"
                                        data-aos="fade-up"
                                        data-aos-duration={1500}
                                    >

                                        <div className="star">
                                            <span>
                                                <i className="icofont-star" />
                                            </span>
                                            <span>
                                                <i className="icofont-star" />
                                            </span>
                                            <span>
                                                <i className="icofont-star" />
                                            </span>
                                            <span>
                                                <i className="icofont-star" />
                                            </span>
                                            <span>
                                                <i className="icofont-star" />
                                            </span>
                                        </div>
                                        <p>
                                            {data.text}
                                        </p>

                                        <div className="coustomer_info">
                                            <div className="avtar">
                                                <img src={data.image} alt="image" />
                                                <div className="text">
                                                    <h6>{data.name}</h6>
                                                    <span>{data.position}</span>
                                                </div>
                                            </div>

                                            <div className="quote">
                                                <i className="icofont-quote-right" />
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
export default ReviewsPositive
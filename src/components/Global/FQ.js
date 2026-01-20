import React, { useState } from "react";

const FQ = () => {
    const [activeId, setActiveId] = useState("collapseOne");

    const handleToggle = (id) => {
        setActiveId(activeId === id ? "" : id);
    };

    const faqdata = [
        {
            id: "collapseOne",
            heading: "headingOne",
            question: "How will the app be useful for me?",
            answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer.",
        },
        {
            id: "collapseTwo",
            heading: "headingTwo",
            question: "What support will I get in the premium package?",
            answer: "Some placeholder content for the second accordion panel. This panel is hidden by default.",
        },
        {
            id: "collapseThree",
            heading: "headingThree",
            question: "Can I get updates for free?",
            answer: "And lastly, the placeholder content for the third and final accordion panel. This panel is hidden by default.",
        },
        {
            id: "collapseFour",
            heading: "headingFour",
            question: "How to set up an account?",
            answer: "Some placeholder content for the second accordion panel. This panel is hidden by default.",
        },
        {
            id: "collapseFive",
            heading: "headingFive",
            question: "Is there any hidden cost?",
            answer: "Some placeholder content for the second accordion panel. This panel is hidden by default.",
        },
        {
            id: "collapseSix",
            heading: "headingSix",
            question: "What is the process to get a refund?",
            answer: "And lastly, the placeholder content for the third and final accordion panel. This panel is hidden by default.",
        },
        {
            id: "collapseSeven",
            heading: "headingSeven",
            question: "How to set up an account?",
            answer: "And lastly, the placeholder content for the third and final accordion panel. This panel is hidden by default.",
        },
        {
            id: "collapseEight",
            heading: "headingEight",
            question: "What is the process to get a refund?",
            answer: "And lastly, the placeholder content for the third and final accordion panel. This panel is hidden by default.",
        },
        {
            id: "collapseNine",
            heading: "headingNine",
            question: "Is there any discount on packages?",
            answer: "And lastly, the placeholder content for the third and final accordion panel. This panel is hidden by default.",
        },
    ];

    return (
        <>
            <section className="row_am faq_section" id="faqsec">
                <div className="container">
                    <div className="section_title" data-aos="fade-up" data-aos-duration={1500}>
                        <span className="title_badge">Question &amp; Answer</span>
                        <h2>FAQs - Frequently Asked Questions</h2>
                    </div>
                    <div className="faq_blocks" data-aos="fade-up" data-aos-duration={1500}>
                        <div className="accordion" id="accordionExample">
                            <div className="row">
                                <div className="col-md-6">
                                    {faqdata.slice(0, 4).map((faq) =>
                                        <div className="card" key={faq.id}>
                                            <div className="card-header" id={faq.heading}>
                                                <h5 className="mb-0">
                                                    <button
                                                        className={`btn Btn-link btn-block text-left ${activeId === faq.id ? "" : "collapsed"}`}
                                                        type="Button"
                                                        onClick={() => handleToggle(faq.id)}
                                                        aria-expanded={activeId === faq.id}
                                                        aria-controls={faq.id}
                                                    >
                                                        {faq.question}
                                                        <span className="icons">
                                                            {activeId === faq.id ? (
                                                                <i className="icofont-minus" />
                                                            ) : (
                                                                <i className="icofont-plus" />
                                                            )}
                                                        </span>
                                                    </button>
                                                </h5>
                                            </div>
                                            <div
                                                id={faq.id}
                                                className={`collapse ${activeId === faq.id ? "show" : ""}`}
                                                aria-labelledby={faq.heading}
                                                data-parent="#accordionExample"
                                            >
                                                <div className="card-body">{faq.answer}</div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className="col-md-6">
                                    {faqdata.slice(4, 9).map((faq) => (
                                        <div className="card" key={faq.id}>
                                            <div className="card-header" id={faq.heading}>
                                                <h5 className="mb-0">
                                                    <button
                                                        className={`btn btn-link btn-block text-left ${activeId === faq.id ? "" : "collapsed"}`}
                                                        type="button"
                                                        onClick={() => handleToggle(faq.id)}
                                                        aria-expanded={activeId === faq.id}
                                                        aria-controls={faq.id}
                                                    >
                                                        {faq.question}
                                                        <span className="icons">
                                                            {activeId === faq.id ? (
                                                                <i className="icofont-minus" />
                                                            ) : (
                                                                <i className="icofont-plus" />
                                                            )}
                                                        </span>
                                                    </button>
                                                </h5>
                                            </div>
                                            <div
                                                id={faq.id}
                                                className={`collapse ${activeId === faq.id ? "show" : ""}`}
                                                aria-labelledby={faq.heading}
                                                data-parent="#accordionExample"
                                            >
                                                <div className="card-body">{faq.answer}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FQ;
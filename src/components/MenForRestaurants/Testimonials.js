import React from 'react';

const Testimonials = () => {
  return (
    <>
      <section className="row_am modern_ui_section">
        <div className="container">
          <div className="section_title" data-aos="fade-up" data-aos-duration={1500}>
            <span className="title_badge">Testimonials</span>
            <h2>What <span>Restaurants Say</span></h2>
            <p>
              Hear from our partner restaurants about their experience with Scoop
            </p>
          </div>
          <div className="row" data-aos="fade-in" data-aos-duration={1500}>
            <div className="col-md-6">
              <div className="testimonial_box" style={{padding: '30px', background: '#fff', borderRadius: '10px', boxShadow: '0 5px 20px rgba(0,0,0,0.1)', marginBottom: '30px'}}>
                <div style={{marginBottom: '20px'}}>
                  <div style={{color: '#ff6b35', marginBottom: '15px'}}>
                    <i className="icofont-star" style={{fontSize: '18px', marginRight: '5px'}} />
                    <i className="icofont-star" style={{fontSize: '18px', marginRight: '5px'}} />
                    <i className="icofont-star" style={{fontSize: '18px', marginRight: '5px'}} />
                    <i className="icofont-star" style={{fontSize: '18px', marginRight: '5px'}} />
                    <i className="icofont-star" style={{fontSize: '18px', marginRight: '5px'}} />
                  </div>
                  <p style={{fontSize: '16px', lineHeight: '1.8', color: '#666', marginBottom: '20px'}}>
                    "Scoop turned our evening leftovers into extra weekly revenue! It's amazing how much we were throwing away before. Now we're making money and helping the environment."
                  </p>
                  <div style={{borderTop: '1px solid #eee', paddingTop: '15px'}}>
                    <h6 style={{fontSize: '16px', fontWeight: '600', color: '#333', marginBottom: '5px'}}>Local Bistro Owner</h6>
                    <span style={{fontSize: '14px', color: '#999'}}>Restaurant Partner</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="testimonial_box" style={{padding: '30px', background: '#fff', borderRadius: '10px', boxShadow: '0 5px 20px rgba(0,0,0,0.1)', marginBottom: '30px'}}>
                <div style={{marginBottom: '20px'}}>
                  <div style={{color: '#ff6b35', marginBottom: '15px'}}>
                    <i className="icofont-star" style={{fontSize: '18px', marginRight: '5px'}} />
                    <i className="icofont-star" style={{fontSize: '18px', marginRight: '5px'}} />
                    <i className="icofont-star" style={{fontSize: '18px', marginRight: '5px'}} />
                    <i className="icofont-star" style={{fontSize: '18px', marginRight: '5px'}} />
                    <i className="icofont-star" style={{fontSize: '18px', marginRight: '5px'}} />
                  </div>
                  <p style={{fontSize: '16px', lineHeight: '1.8', color: '#666', marginBottom: '20px'}}>
                    "Love the waste reduction – our customers appreciate the deals too. We've built a loyal following of people who come specifically for our Scoop offerings."
                  </p>
                  <div style={{borderTop: '1px solid #eee', paddingTop: '15px'}}>
                    <h6 style={{fontSize: '16px', fontWeight: '600', color: '#333', marginBottom: '5px'}}>Neighborhood Eatery Manager</h6>
                    <span style={{fontSize: '14px', color: '#999'}}>Restaurant Partner</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;

import React from 'react';

const RestaurantCTA = () => {
  return (
    <>
      <section className="row_am modern_ui_section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7" data-aos="fade-right" data-aos-duration={1500}>
              <div>
                <span className="title_badge" style={{
                  display: 'inline-block',
                  marginBottom: '20px'
                }}>
                  Join Scoop Today
                </span>
                <h2 style={{
                  fontSize: '42px',
                  fontWeight: '700',
                  marginBottom: '20px',
                  lineHeight: '1.3',
                  color: '#333'
                }}>
                  Ready to Turn Your Unsold Food into Revenue?
                </h2>
                <p style={{
                  fontSize: '18px',
                  lineHeight: '1.8',
                  marginBottom: '30px',
                  color: '#666'
                }}>
                  Join hundreds of restaurants already reducing waste and earning extra income.
                  Start listing your scoops today and connect with local customers who love great deals.
                </p>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  marginBottom: '30px'
                }}>
                  <li style={{
                    fontSize: '16px',
                    marginBottom: '12px',
                    color: '#333',
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    <i className="icofont-check-circled" style={{
                      fontSize: '24px',
                      marginRight: '12px',
                      color: '#43e97b'
                    }} />
                    Free to join, no hidden fees
                  </li>
                  <li style={{
                    fontSize: '16px',
                    marginBottom: '12px',
                    color: '#333',
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    <i className="icofont-check-circled" style={{
                      fontSize: '24px',
                      marginRight: '12px',
                      color: '#43e97b'
                    }} />
                    Set your own prices and pickup times
                  </li>
                  <li style={{
                    fontSize: '16px',
                    marginBottom: '12px',
                    color: '#333',
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    <i className="icofont-check-circled" style={{
                      fontSize: '24px',
                      marginRight: '12px',
                      color: '#43e97b'
                    }} />
                    Reach local customers instantly
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-5" data-aos="fade-left" data-aos-duration={1500}>
              <div style={{
                background: '#fff',
                padding: '40px',
                borderRadius: '20px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
              }}>
                <h4 style={{
                  fontSize: '24px',
                  fontWeight: '700',
                  marginBottom: '25px',
                  color: '#333',
                  textAlign: 'center'
                }}>
                  Get Started Now
                </h4>
                <a
                  href="mailto:partners@scoop.com"
                  style={{
                    display: 'block',
                    width: '100%',
                    padding: '18px 30px',
                    background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
                    color: '#fff',
                    fontSize: '18px',
                    fontWeight: '600',
                    borderRadius: '50px',
                    textAlign: 'center',
                    textDecoration: 'none',
                    marginBottom: '15px',
                    boxShadow: '0 10px 30px rgba(255, 107, 53, 0.4)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.boxShadow = '0 15px 40px rgba(255, 107, 53, 0.5)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(255, 107, 53, 0.4)';
                  }}
                >
                  <i className="icofont-restaurant" style={{ marginRight: '10px' }} />
                  Register Your Restaurant
                </a>
                <a
                  href="mailto:info@scoop.com"
                  style={{
                    display: 'block',
                    width: '100%',
                    padding: '18px 30px',
                    background: '#fff',
                    color: '#667eea',
                    fontSize: '16px',
                    fontWeight: '600',
                    borderRadius: '50px',
                    textAlign: 'center',
                    textDecoration: 'none',
                    border: '2px solid #667eea',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = '#667eea';
                    e.currentTarget.style.color = '#fff';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = '#fff';
                    e.currentTarget.style.color = '#667eea';
                  }}
                >
                  <i className="icofont-envelope" style={{ marginRight: '10px' }} />
                  Contact Us for More Info
                </a>
                <p style={{
                  textAlign: 'center',
                  marginTop: '20px',
                  fontSize: '14px',
                  color: '#999',
                  margin: '20px 0 0 0'
                }}>
                  Questions? Email us at <a href="mailto:partners@scoop.com" style={{ color: '#667eea', textDecoration: 'none', fontWeight: '600' }}>partners@scoop.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RestaurantCTA;

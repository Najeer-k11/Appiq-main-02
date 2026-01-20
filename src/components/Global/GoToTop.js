import React, { useState, useEffect } from 'react';
const GoToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const handleScroll = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <div>
            <div
                id="Gotop"
                style={{
                    display: isVisible ? 'block' : 'none', // Toggle visibility
                    position: 'fixed',
                    bottom: '20px',
                    right: '20px',
                    backgroundColor: '#FB5B29',
                    color: 'white',
                    padding: '0px, 2px',
                    borderRadius: '50%',
                    cursor: 'pointer',
                    fontSize: '30px',
                    zIndex: 1000,
                    width: '50px',
                    height: '50px',
                    textAlign: 'center',
                    justifyContent: 'center',
                }}
                onClick={scrollToTop}
            >
                <span><i className="icofont-arrow-up"></i></span>
            </div>
        </div>
    );
};
export default GoToTop;
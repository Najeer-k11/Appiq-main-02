import React, { useState, useEffect } from 'react';

const Preloader = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            {isLoading && (
                <div id="preloader">
                    <div id="loader"></div>
                </div>
            )}
        </div>
    );
};

export default Preloader;
// Map.jsx

import React from 'react';

const Map = () => {
    return (
        <div className="container-xxl pt-5 px-0 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container-xxl pt-5 px-0">
                <div className="bg-dark">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117925.21689694983!2d88.26495057337593!3d22.535564936984567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1716226856074!5m2!1sen!2sin"
                        frameBorder="0" style={{ width: '100%', height: '450px', border: '0' }}
                        allowFullScreen="" aria-hidden="false" loading="lazy" tabIndex="0" referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
        </div>
    );
};

export default Map;
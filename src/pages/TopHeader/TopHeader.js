import React from 'react';
import './TopHeader.css'

const TopHeader = () => {
    return (
        <>
        <div className='top-container'>
            <div className="logo">
                <img src="http://medicare.bold-themes.com/dentist/wp-content/uploads/sites/3/2018/03/dentalcare-logo-white.png" alt="" />
            </div>
            <div className="details">
                <div className="detail">
                <i className="far fa-clock"></i>
                <span>
                    <p>Monday - Friday 08:00-19:00</p>
                    <p>Saturday and Sunday - CLOSED</p>
                </span>
                </div>
                <div className="detail">
                <i className="fas fa-phone-alt"></i>
                
                <span>
                    <p>+0800 2336 7811</p>
                    <p>office@dentalcare.com</p>
                </span>
                </div>
                <div className="detail">
                <i className="fas fa-map-marker-alt"></i>
                
                	
                <span>
                    <p>Madison Avenue 7</p>
                    <p>New York, US</p>
                </span>
                </div>
                

            </div>
        </div>
           
        </>
    );
};

export default TopHeader;
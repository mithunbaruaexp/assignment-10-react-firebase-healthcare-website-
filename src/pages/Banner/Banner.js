import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    return (
        <>
        <div className="top-banner">
        <div className='banner-container'>
            <div className="firs-side w-50">
                <span>
                 <h2 className='heading text-start mt-5'>Your own <br />stomatologist</h2>
                </span>
                <p className='text-start my-5 heading-text'>We offer comprehensive exams and cleanings for patients of all ages. Dental Crowns: We provide natural-looking dental restorations for damaged or structurally compromised teeth.</p>
                <span className='btns my-5'>
                    
                    <Nav.Link  className='first-btn' as={Link} to="/team">View Our Team</Nav.Link>
                    <Nav.Link  className='second-btn' as={Link} to="/booking">book A visit</Nav.Link>
                   
                </span>
            </div>
            <div className="second-side w-50">
                <img src="https://i.ibb.co/4fYnbpp/Screenshot-2-removebg-preview.png" alt="" />
            </div>
        </div>
        </div>
        </>
    );
};

export default Banner;
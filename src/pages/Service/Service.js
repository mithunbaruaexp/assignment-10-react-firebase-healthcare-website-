import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';


const Service = (props) => {
    
    const {id, workingTime,  title, service, description, img,contacts } =props.service;
    return (
        <div className="service pb-3">
            <img src={img} alt="" />
            <h3>{title}</h3>
            <h5>{service}</h5>
            <p className="px-3">{description}</p>
            <small>{contacts}</small><br />
            <strong>From {workingTime.start+' to '+ workingTime.end}</strong>
            <Link to={`/bookseat/${id}`}>
            <button className='book-seat'>Book a seat</button>
            </Link>
        </div>
    );
};

export default Service;
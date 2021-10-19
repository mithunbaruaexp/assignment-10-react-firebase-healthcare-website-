import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);
    // console.log(services);
    useEffect(() => {
        fetch('fakeService.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div id="services" className='services'>
        <h2 className="service-head">Our <span className='span-text'>services</span></h2>
        <div className="service-container">
            {
                services.map(service => <Service
                    key={service.id}
                    service={service}
                ></Service>)
            }
        </div>
    </div>
    );
};

export default Services;
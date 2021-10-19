import React from 'react';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
import Services from '../Services/Services';
import Team from '../Team/Team';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Team></Team>
            <Services></Services>
            <ContactUs></ContactUs>
            
        </div>
    );
};

export default Home;
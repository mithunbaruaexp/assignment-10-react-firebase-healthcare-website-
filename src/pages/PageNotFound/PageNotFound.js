import React from 'react';
import { Link } from 'react-router-dom';
import './PageNotFound.css'

const PageNotFound = () => {
    return (
        <div className='not-Found'>
            <img src="https://swall.teahub.io/photos/small/362-3620267_graphics.png" alt="" />
            <br />
            <Link to='/'>
            <button className='btn-notFound'>Go back</button>
            
            </Link>
            
        </div>
    );
};

export default PageNotFound;
<img src="https://swall.teahub.io/photos/small/362-3620267_graphics.png" alt="" />
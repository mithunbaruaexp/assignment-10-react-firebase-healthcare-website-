import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import BoardMembers from '../BoardMembers/BoardMembers';
import './BoardMember.css'

const BoardMember = () => {
    const [director, setDirector]=useState([]);
    
    useEffect(()=>{
        fetch('fakeDoctors.json')
        .then(res=>res.json())
        .then(data=>setDirector(data))

    },[])
    return (
        <div className='mx-5 my-5'>
            <h1>Borad of <span className='color-haed'>Directors</span></h1>

        <Row xs={1} md={2} className="g-4">
            
            {
                director.map(director=><BoardMembers
                key={director.id}
                director={director}
                ></BoardMembers>)
            }
     
        </Row>
            
        </div>
    );
};

export default BoardMember;
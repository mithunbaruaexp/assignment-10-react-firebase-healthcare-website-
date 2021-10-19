import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import { useParams } from "react-router-dom";
import './BookSeat.css'

const BookSeat = () => {
  let { id } = useParams();
  const [serviceDetails, setServiceDetails] = useState([]);
  const [singleService, setSingleService] = useState({});
  console.log(singleService);

  //load data
  useEffect(() => {
    fetch("/bogyService.json")
      .then((res) => res.json())
      .then((data) => setServiceDetails(data.service));
  }, []);

  //will be called after the state is set
  useEffect(() => {
    const foundService = serviceDetails.find((service) => service.id === id);
    setSingleService(foundService);
  }, [id, serviceDetails]);;
    return (
        <div className='details-container'>
            <div className='info-container'>
            <Container>

  <Row>
    <Col>
    <div className="myImg">
    <img src={singleService?.img} alt="" />

    </div>
    
    </Col>
    <Col>
    <div className='myCard text-start'>
      <div className='text-details'>
        <h4  className='text-color'>{singleService?.service}</h4>
        <h2 className='title'>{singleService?.title}</h2>
        <p className='text-color'>{singleService?.description}</p>
        <p className='day'>Business-day:{singleService?.day}</p>
        <p className='workingtime'>Working Hours:{singleService?.workingTime?.start} to {singleService?.workingTime?.end}</p>

      </div>

    </div>
    
    </Col>
    <Col>
    <div className='data-contacts'>
      <p>Cell:{singleService?.contacts}</p>
      <p>Email:{singleService?.email}</p>

    </div>
    
    </Col>
  </Row>
</Container>

            </div>
            
        </div>
    );
};

export default BookSeat;
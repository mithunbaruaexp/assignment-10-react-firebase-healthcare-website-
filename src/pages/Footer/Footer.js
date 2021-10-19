import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
  return (
    <div >
      <div className='footer-container text-white'>
    <Container>
  <Row>
    <Col sm>
      <h2 className='text-start mt-5'  >Get in touch</h2>
      <hr />
      <h1 className='text-start' >Contact us</h1>
      <p className='text-start'>
      For  decades, Dr. Fox has created the "Hollywood Smile"...the age-defying  natural smile that enhances your appearance. Dr. Fox is an  Internationally known Dentist who has transformed the smiles of the  world's best known public figures.
      </p>
      <br />
      <hr />
      <h3>
      <i class="fas fa-procedures"></i>
          EMERGENCY CONTACT
     </h3>
     <hr />
      <p  className='mb-5'>Free call 24/7 <br />+1555 6761 020</p>
      
    </Col>
    <Col  sm>
    <div className='footer-seond'>
    <i class="fas fa-stethoscope"></i>
      <h3>Home visit</h3>
      <p>
      Chargeable call 24/7 <br />
      +1777 6761 050</p>
    </div>
            
    </Col>
   
    <Col sm>
      <div className='mt-5'>
        <h1>Working Hours</h1>
        <hr />
        <h5>Mon-Wed 6:00pm-9:00pm</h5><hr />
        <h5>Thu 10:00am-7:00am</h5><hr />
        <h5>Fri 5:00pm-11:00pm</h5>
      </div>
    <div className='footer-third'>
    <img src="https://i.ibb.co/q7jzdbj/asset-65.png" alt="" />
</div>    
    </Col>
    <Col sm>
      <h2 className="mt-5">Follow us</h2>
      <h1>Our Activity</h1>
      <p className='my-5'>
      Organically grow the holistic world view of innovation empowerment.
      </p>
      <span >
      <i className="icon-footer fab fa-facebook-f"></i>
      <i className="icon-footer fab fa-instagram-square"></i>
      <i className="icon-footer fab fa-twitter"></i>
      <i className="icon-footer fab fa-pinterest-p"></i>
      </span>
    </Col>
  </Row>
</Container>

    </div>
    
   <div className='footer-bootm text-white '>
   <Container fluid="md">
  <Row>
    <Col><p className='my-3'>
      <small> Copyright by mithunxp 2021. All rights reserved.</small>
     </p></Col>
  </Row>
</Container> </div>  
 </div>
  );
};

export default Footer;
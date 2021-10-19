import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import './Booking.css'
const Booking = () => {
    return (
        <div className='booking-container'>
            <div>
            <Container>
            <Row>
                <Col>
                <Form className='my-5'>
                    <Row>
                        <Col>
                        <Form.Control  className='form-field' placeholder="First name" />
                        </Col>
                        <Col>
                        <Form.Control  className='form-field' placeholder="Last name" />
                        </Col>
                    </Row>
                    <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
     
      <Form.Control  className='form-field mt-3' type="email" placeholder="Enter email" />
    </Form.Group>
    <FloatingLabel  className='form-field mt-3 ps-2' controlId="floatingTextarea2" label="Write your problem in details">
    <Form.Control
      className='form-field'

      as="textarea"
      placeholder="Leave a comment here"
      style={{ height: '100px' }}
    />
  </FloatingLabel>
  </Row>

  <Form.Group className="mb-3" controlId="formGridAddress1">
    
    
  </Form.Group>

  <Form.Group className="mb-3 form-field" controlId="formGridAddress2">
    
    <Form.Control className=" form-field"  placeholder="Apartment, studio, or floor" />
  </Form.Group>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control className="form-field"  />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Select className=" form-field"  defaultValue="Choose...">
        <option>Choose...</option>
        <option>Khagrachari</option>
        <option>Bandorban</option>
        <option>Rangamati</option>
      </Form.Select>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control className=" form-field"  />
    </Form.Group>
  </Row>
  <Button className='book-btn' variant="primary" type="submit">
    Send
  </Button>

                    </Form>
                </Col>
                <Col>
                <div className='img-container mt-5'>
                    <img src="https://i.ibb.co/r02qRvz/asset-22.jpg" alt="" />
                </div>
                </Col>
            </Row>
        
            </Container>


            </div>
        </div>
    );
};

export default Booking;
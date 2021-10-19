import React from 'react';
import { Card, Col } from 'react-bootstrap';

const BoardMembers = (props) => {
    const {heading,name,details,img}=props.director
    console.log(props.director);
    return (
        <div>  
       
  {Array.from({ length: 1 }).map((_, idx) => (
    <Col>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <small><strong>{heading}</strong></small>
          <Card.Text>
            {details}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}

        </div>
    );
};

export default BoardMembers;
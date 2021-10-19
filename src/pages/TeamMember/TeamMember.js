import React from 'react';
import './TeamMember.css'


const TeamMember = (props) => {
    // console.log(props.member);
    const {img, name, details, heading} = props.member

    // const [item]=props.value
    // console.log(props.value.heading);
    return (
      
        <div className="card-group head-card">
 
        
  <div className="card">
    <img src={img} className="card-img-top" alt="..."/>
    <div className="card-body card-color">
      <h5 className="card-title">{heading}</h5>
      <small> <strong>{name}</strong> </small>
      <p className="card-text">{details}</p>
    </div>
    
  </div>
</div>
        
        
    
    );
};

export default TeamMember;
import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import './Login.css'
// ---------------------------------
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import initializeAuthentication from '../firebse/firebase.init';
initializeAuthentication();

const Login = () => {
    const handleNameChange = e => {
        console.log(e.target.value);
      }
      const handleEmailChange = e => {
        console.log(e.target.value);
      }
    
      const handlePasswordChange = e => {
        console.log(e.target.value)
      }
      const handleResetPassword = () => {
        
      }
    
      const handleRegistration =e=>{
          console.log('submitted');
          e.preventDefault()
      }

    const { signInUsingGoogle,signInUsingGitHub } = useAuth();
    const location = useLocation()
    const history =useHistory()
    const redirect_url = location.state?.from || '/home'

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url);
            })
    }
    const handleGitHubSignIn =()=>{
        signInUsingGitHub()
        .then(result=>{
            history.push(redirect_url);

        })


    }

    return (
        <div className='area-container'>
           <div className='login-container mb-5'>
           <h2 className='mb-5'>Please Login</h2>
            <button onClick={handleGoogleLogin} className="google-login">Log in with Google</button>
            <button onClick={handleGitHubSignIn} className="google-login">GitHub sign in</button>
           </div>
           <div className="create-account">
            <Container>
                <Row>
                    <Col></Col>
                    <Col xs={6}>
                        {/* --------------- */}
                  
                        <Form onSubmit={handleRegistration}>
  <Form.Group as={Row} className="mb-3 create-form" controlId="formHorizontalEmail">
    <Form.Label column sm={2}>
      Email
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="email" placeholder="Email" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
    <Form.Label column sm={2}>
      Password
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="password" placeholder="Password" />
    </Col>
  </Form.Group>
 
  <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
    <Col sm={{ span: 10, offset: 2 }}>
      <Form.Check label="Remember me" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3">
    <Col sm={{ span: 10, offset: 2 }}>
      <Button className='log-in' type="submit">Sign in</Button>
    </Col>
  </Form.Group>
</Form>
                    </Col>
                    <Col></Col>
                </Row>
                </Container>

           </div>
        </div>
    );
};

export default Login;
// import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import './Login.css'
// ---------------------------------
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword ,sendEmailVerification  } from "firebase/auth";
import initializeAuthentication from '../firebse/firebase.init';
initializeAuthentication();
const auth = getAuth();

const Login = () => {
   
  

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
    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')
    const [error, setError]= useState('')
    const [log, setLog]= useState(false)
    const toggle =e=>{
      setLog(e.target.checked);
    }

    const handleEmailPassword = e=>{
      setPassword(e.target.value);
    }
    const handleEmailValue = e =>{
      setEmail(e.target.value);
    }
    const handleSubmit = e =>{
      e.preventDefault()
      if(password.length<6){
        setError('Password should be at least six character')
        return;
      }
      if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
        setError('Password should have 2 upper case');
        return;
      }

      log? processlog(email, password) : createNewUser(email, password)
     
    
    }
    const processlog=(email, password)=>{
      signInWithEmailAndPassword (auth, email, password)
      .then(result=>{
        const user= result.user
        console.log(user);
        setError('')
      })
      .catch(error=>{
        setError(error.message)
      })

    }
    const createNewUser=(email, password)=>{
      createUserWithEmailAndPassword(auth, email, password)
      .then(result=>{
        const user= result.user
        console.log(user.email);
        setError('')
        emailVerification()
      })
      .catch(error=>{
        setError(error.message)
      })
    }
    const emailVerification= ()=>{
      sendEmailVerification(auth.currentUser)
      .then(result=>{
        console.log(result);
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
                        {/* -------------------------------- */}
                  
                       <Form onSubmit={handleSubmit}>
                         <h2>{log?'Please login':'Create an account'}</h2>
                         <p>{error}</p>
                         <input onBlur={handleEmailValue} type="email" placeholder='Enter your Email' />
                         <p>{error}</p>
                         <input onBlur={handleEmailPassword} type="password" placeholder='Enter your Password' />
                         <br />
                         <label>Already created?</label>
                         <input onChange={toggle} type="checkbox" name="" id="" />
                         <br />
                         <button type='submit'>{log?'Sign in':'Sign up'}</button>
                       </Form>
                    </Col>
                   <Col>
                   </Col>
                </Row>
                </Container>

           </div>
        </div>
    );
};

export default Login;
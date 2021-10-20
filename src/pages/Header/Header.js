import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';



import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth();

   
    return (
        
            <div>
         

            <Navbar bg="dark" variant="dark" sticky="top"  expand="lg">
            <Container  >
                {/* <Navbar.Brand className='text-white' href="#">Navbar scroll</Navbar.Brand> */}
                <Navbar.Toggle  aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll>
                <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                <Nav.Link as={Link} to="/services">Services</Nav.Link>
                <Nav.Link as={Link} to="/team">Team</Nav.Link>
                <Nav.Link as={Link} to="/boardmember">Board</Nav.Link>
                <Nav.Link as={Link} to="/booking">Booking</Nav.Link>
            
                
                
                </Nav>
                
            </Navbar.Collapse>
            <Navbar.Brand href="#">
           {
               user?.email?
               <button className='nav-logout' onClick={logOut}>Log Out</button>:
               <Nav.Link className='text-white'  as={Link} to="/login">Login</Nav.Link>
           }
            </Navbar.Brand>
            <Navbar.Brand href="#">
            {user.displayName}
            </Navbar.Brand>
            <Navbar.Brand href="#">
            {   user?.email?
                <img className='nav-img' src={user?.photoURL} alt="" />:
            ''
            }
            </Navbar.Brand>
        </Container>
        </Navbar>

            </div>
    );
};

export default Header;
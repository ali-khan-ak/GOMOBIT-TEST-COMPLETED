import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import toast, { Toaster } from 'react-hot-toast';

import './auth.css'
import { useDispatch } from 'react-redux';
import { login } from '../../actions/auth';
import { useNavigate } from 'react-router-dom'

function FormExample() {
  const navigate = useNavigate();
  const [userData, setData] = useState({
    email: '', password: '',
  });

  const [emailError, setEmailError] = useState();
  const [passwordError, setPasswordError] = useState(true);
  const dispatch = useDispatch();
  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }
  //   const navigate = useNavigate();
  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }
  const handleSignup = (e) => {
    e.preventDefault();
    if ( userData.email === "") {
      return toast.error("Email Required")
    }if (!isValidEmail(userData.email)){
      return toast.error("@ missing from Email")
    }
    if(userData.password === ""){
      return toast.error("Password Required")

    } else {
      setEmailError(true);
      console.log(userData)
      dispatch(login(userData, navigate,toast));

    }
  }

  return (

    <div className="main-container " >
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <Navbar className="mb-5" bg="dark" variant="dark">
        <Container className="d-flex justify-content-center align-item-center">
          <h2 className="text" >GO MOBIT</h2>
        </Container>
      </Navbar>
      <Container>
        <h2 className="text" >User Login</h2>
      </Container>
      <Form className="login-form" >
        <Form.Group className="mb-3" controlId="formBasicEmail">
  
          <Form.Control className="input-ds" type="email" placeholder="Email" value={userData.email} onChange={(e) => setData({ ...userData, email: e.target.value })} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="validationCustom05">
  
          <Form.Control className="input-ds" type="password" placeholder="Password" value={userData.password} onChange={(e) => setData({ ...userData, password: e.target.value })} required />
        </Form.Group>
        <div className="mb-3">
          <div>
            <span className='span-st' >Don't have an account? <a className="a-sy" href="/signup">Signup</a></span>
          </div>
        </div>

        <Button type="submit" className="btn-style" onClick={handleSignup}>
          Login
        </Button>
      </Form>

    </div>

  );
}

export default FormExample;
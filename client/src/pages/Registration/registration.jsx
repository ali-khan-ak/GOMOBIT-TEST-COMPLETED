import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import NumericInput from 'react-numeric-input';
import './registration.css'
import { useDispatch } from 'react-redux';
import { registerUser } from '../../actions/auth';
import { useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';

function Registeration() {
  const [userData, setData] = useState({
    email: '', firstname: '', lastname: '', password: '',age:''
  });

  const [cpassword, setCPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleSignup = (e) => {
    e.preventDefault();
    e.preventDefault();
    if (userData.email === "") {
      return toast.error("Email Required")
    } if (!isValidEmail(userData.email)) {
      return toast.error("@ missing from Email")
    }
    if (userData.password === "") {
      return toast.error("Password Required")

    } if (userData.age === "") {
      return toast.error("Age Required")

    } if (userData.password === "") {
      return toast.error("Password Required")
    } 
    else {
      console.log(userData)
      dispatch(registerUser(userData, navigate,toast));
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
          <h2 className="text" > GOMOBIT</h2>
        </Container>
      </Navbar>
      <Container>
        <h2 className="text" >User Signup</h2>
      </Container>
      <Form className="signup-form">
        <Form.Group className="mb-3">
          <Form.Control className="input-ds" type="text" placeholder="Username" value={userData.username} onChange={(e) => setData({ ...userData, username: e.target.value })} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control className="input-ds" type="email" placeholder="Email" value={userData.email} onChange={(e) => setData({ ...userData, email: e.target.value })} />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Control className="input-ds" placeholder="Phonnumber" value={userData.phonenumber} onChange={(e) => setData({ ...userData, phonenumber: e.target.value })} />
        </Form.Group>
        <Form.Group className="mb-3" >
          <NumericInput className="input-numeric" min={16} max={60} onChange= {(age)=>setData({ ...userData, age:age })}  required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control className="input-ds" type="password" placeholder="Password" value={userData.password} onChange={(e) => setData({ ...userData, password: e.target.value })} />
        </Form.Group>
        <div className="mb-3">
          <div>
            <span className='span-st' >Already have an account? <a className="a-sy" href="/">Login</a></span>
          </div>
        </div>
        <Button type="submit" className="btn-style" onClick={handleSignup}>
          Signup
        </Button>
      </Form>

    </div>

  );
}

export default Registeration;
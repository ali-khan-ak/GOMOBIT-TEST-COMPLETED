import React, { useState } from 'react'
import Sidebar from '../../components/Sidebar/sidebar'
import { Image, Button, Form, Card } from 'react-bootstrap';
import './addUser.css'
import { useDispatch } from 'react-redux';
import NumericInput from 'react-numeric-input';
import { addUser } from '../../actions/user';
import toast, { Toaster } from 'react-hot-toast';

const Adduser = () => {
    const dispatch = useDispatch();
    const [newage, setnewage] = useState(16) 
    const [userData, setData] = useState({
        email: '', username: '', password: '', age: '' , phonenumber: ''
    });
    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
      }

    const handleAdduser = (e) => {
       
            e.preventDefault();
            if ( userData.email === "") {
                return toast.error("Email Required")
              }if (!isValidEmail(userData.email)){
                return toast.error("@ missing from Email")
              }
              if(userData.password === ""){
                return toast.error("Password Required")
          
              }if(userData.age === ""){
                return toast.error("Age Required")
          
              }if(userData.password === ""){
                return toast.error("Password Required")
          
              }
              else{
            console.log(userData)
            dispatch(addUser(userData,toast));
              }
            
        
    }


    return (
        <>
            <Sidebar />
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <div className='container-user'>
                <div className='user-overlay'>
                    <div className='form-container mt-4'>
                        <Card body style={{ boxShadow: "8px 9px 23px 3px #141619" }} >
                            <div className='main-card'>
                                <Form className='user-from'>
                                    <div className='group-textfields'>
                                        <Form.Group className="mb-3 me-3">
                                            <Form.Control className="user-input" type="text" placeholder="Username" value={userData.username} onChange={(e) => setData({ ...userData, username: e.target.value })} required />
                                        </Form.Group >
                                        <Form.Group className="mb-3" >
                                            <NumericInput  className="user-input" style = {{ borderraduis:"13px 0px 0px 11px !important", color: "black !important"}} min={16} max={60} onChange= {(age)=>setData({ ...userData, age:age })}  required />
                                        </Form.Group>
                                    </div>
                                    <div className='group-textfields'>
                                        <Form.Group className="mb-3 me-3" controlId="formBasicEmail">
                                            <Form.Control className="user-input" type="email" placeholder="Email" value={userData.email} onChange={(e) => setData({ ...userData, email: e.target.value })} required />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicPhonenumber">
                                            <Form.Control className="user-input" type="text" placeholder="Phone Number" value={userData.phonenumber} onChange={(e) => setData({ ...userData, phonenumber: e.target.value })} required />
                                        </Form.Group>
                                    </div>
                                    <div className='group-textfields'>
                                        <Form.Group className="mb-3 me-3" controlId="formBasicPassword">
                                            <Form.Control className="user-input" type="password" placeholder="Password" value={userData.password} onChange={(e) => setData({ ...userData, password: e.target.value })} required />
                                        </Form.Group>
                                    </div>
                                    <Button type="submit" className="btn-style" onClick={handleAdduser} >
                                        Add User
                                    </Button>
                                </Form>

                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Adduser
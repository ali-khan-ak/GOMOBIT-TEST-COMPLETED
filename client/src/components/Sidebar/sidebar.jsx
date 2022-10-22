import React, { useState} from 'react'
import { Container, Navbar, Button, Offcanvas, OverlayTrigger, Tooltip} from 'react-bootstrap';
import { AiOutlineBars, AiOutlineLogout, AiOutlineEye, AiOutlineHome } from "react-icons/ai";
import { BsPerson } from "react-icons/bs"
import './sidebar.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
const Sidebar = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handlelogout = () => {
        console.log(user)
        dispatch({type: 'LOGOUT'})
        navigate('/')
        setUser(null);
        console.log('logout')
    }

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Button variant="outline-light" onClick={handleShow}>
                        < AiOutlineBars />
                    </Button>
                    <Navbar.Brand className='ms-3'><AiOutlineEye /> GOMOBIT</Navbar.Brand>
                </Container>
                <Container>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <OverlayTrigger
                                placement="left"
                                delay={{ show: 250, hide: 400 }}
                                overlay={<Tooltip id="button-tooltip">Logout</Tooltip>}
                            >
                                <Button variant="outline-light" onClick={handlelogout}> < AiOutlineLogout /></Button>
                            </OverlayTrigger>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


            <Offcanvas className="canvas" show={show} onHide={handleClose} >
                <Offcanvas.Header className="canvas overlay" closeButton>
                    <Offcanvas.Title> <h2> <AiOutlineEye />GOMOBIT</h2> </Offcanvas.Title>
                    <hr/>
                </Offcanvas.Header>
                <Offcanvas.Body className="cardbody overlay">
                    <div className='link-list'>
                        
                        <a className='nav-link mt-3' href = "/viewuser">
                            <AiOutlineHome style={{ margin: "2px" }} />View User
                        </a>
                        <hr />
                        <a className='nav-link' href="/adduser">
                            <BsPerson style={{ margin: "2px" }} />Add User
                        </a>
                        <hr/>
                        
                    </div>

                    {/* <div>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={pimg} />
                            <Card.Body className="profileCard">
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text style={{ color: "black" }}>
                                    Username: {user.result.username}<br /> Email: {user.result.email}
                                </Card.Text>
                                <Button variant="primary">User Profile</Button>
                            </Card.Body>
                        </Card>
                    </div> */}
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default Sidebar
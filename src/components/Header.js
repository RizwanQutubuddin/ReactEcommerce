import React from "react";
import { Navbar,Nav,NavDropdown,Container } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom';


const Header = () => { 
    const user = JSON.parse(localStorage.getItem('user-info'));
    const navigate = useNavigate ();
    let logout = () => { 
        localStorage.clear();
        navigate('/login');
    }
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        {
                            
                            localStorage.getItem('user-info') ?
                            <>
                                <Nav className="me-auto">
                                    
                                    <Nav.Link href=""><Link to="/home">Home</Link></Nav.Link>
                                    <Nav.Link href=""><Link to="/about">About</Link></Nav.Link>
                                    <Nav.Link href=""><Link to="/contact">Contact</Link></Nav.Link>
                                    <Nav.Link href=""><Link to="/add">Add Product</Link></Nav.Link>
                                    <Nav.Link href=""><Link to="/update">Update Product</Link></Nav.Link>
                                </Nav>
                                    <Nav>
                                        <NavDropdown title={user.name} id="collasible-nav-dropdown">
                                            <NavDropdown.Item >Profile</NavDropdown.Item>
                                            <NavDropdown.Item >Another action</NavDropdown.Item>
                                            <NavDropdown.Item >Setting</NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item onClick={logout}>
                                                Logout
                                            </NavDropdown.Item>
                                        </NavDropdown>
                                    </Nav>    
                            </>
                                :
                            <>
                                <Nav>
                                    <Nav.Link><Link to="/register">Register</Link></Nav.Link>
                                    <Nav.Link><Link to="/login">Login</Link></Nav.Link>
                                </Nav>
                            </>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header;
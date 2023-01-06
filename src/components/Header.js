import React, { useEffect, useState } from "react";
import { Navbar,Nav,NavDropdown,Container, Form } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom';


const Header = () => { 
    const user = JSON.parse(localStorage.getItem('user-info'));
    const navigate = useNavigate();
    const [search, setSearch] = useState('');
    
    let logout = () => { 
        localStorage.clear();
        navigate('/login');
    }

    useEffect(() => {
        fetchData();
    }, [search]);

    async function fetchData() {
        let result = await fetch('http://127.0.0.1:8000/api/search/p');
        result = await result.json();
        console.log(result);
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
                                    
                                    <Nav.Link><Link to="/">Home</Link></Nav.Link>
                                    <Nav.Link><Link to="/about">About</Link></Nav.Link>
                                    <Nav.Link><Link to="/contact">Contact</Link></Nav.Link>
                                    <Nav.Link><Link to="/add">Add Product</Link></Nav.Link>
                                    </Nav>
                                    <Form className="d-flex">
                                        <Form.Control
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                            aria-label="Search"
                                            onKeyUp={(e) => setSearch(e.target.value)}
                                        />
                                        
                                    </Form>
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
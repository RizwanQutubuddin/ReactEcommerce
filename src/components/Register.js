import React, { useEffect, useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import Header from "./Header";

const Register = () => { 
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate ();
    
    useEffect(() => {
        if (localStorage.getItem('user-info')) {
            navigate('/');
        }

    },[]);

    async function register() { 
        let item = { name, email, password };
        let result = await fetch('http://127.0.0.1:8000/api/register', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(item)
        });
        result = await result.json();
        localStorage.setItem('user-info', JSON.stringify(result));
        if (localStorage.setItem('user-info')) { 
            navigate('/');
        }
    }
    return (
        <>
            <Header/>
            <Row>
                <Col md={{ span: 4, offset: 4 }}>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name" value={name} onChange={(e)=>setName(e.target.value)} />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" value={password}  onChange={(e)=>setPassword(e.target.value)}/>
                        </Form.Group>
                        <Button variant="primary" onClick={register}>
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </>
    );
}

export default Register;
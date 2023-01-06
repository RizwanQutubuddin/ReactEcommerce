import React, { useEffect, useState } from "react";
import { Form,Col,Row,Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

const Login = () => { 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate ();
    useEffect(() => {
        if (localStorage.getItem('user-info')) {
            navigate('/');
        }

    }, []);

    async function login() { 
        let item = {email, password };
        let result = await fetch('http://127.0.0.1:8000/api/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(item)
        });
        result = await result.json();
        localStorage.setItem('user-info', JSON.stringify(result));
        if (localStorage.getItem('user-info')) { 
            navigate('/');
        }
        
    }

    return (
        <>
            <Header/>
            <Row>
                <Col md={{ span: 4, offset: 4 }}>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" value={password}  onChange={(e)=>setPassword(e.target.value)}/>
                        </Form.Group>
                        <Button variant="primary" onClick={login}>
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </>
    );
}

export default Login;
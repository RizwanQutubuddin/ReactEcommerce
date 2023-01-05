import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Header from "./Header";

const Add = () => { 
    let [name, setName] = useState('');
    let [price, setPrice] = useState('');
    let [description, setDescription] = useState('');
    let [file, setFile] = useState('');

    async function addProduct() { 
        let item = { name, price, description, file };
        
        const formData = new FormData();
        formData.append("name", name);
        formData.append("price", price);
        formData.append("description", description);
        formData.append("file", file);
        console.log(item);
        let result = await fetch('http://127.0.0.1:8000/api/add-product', {
            method: 'POST',
            body: formData
        });
        // result = await result.json();
        console.log("done");
        // localStorage.setItem('user-info', JSON.stringify(result));
        //navigate('/home');

    }
    return (
        <>
            <Header />
            <Container>
                <Row>
                    <Col md={{ span: 4, offset: 4 }}>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Product Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Product Name" value={name} onChange={(e)=>setName(e.target.value)}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPrice">
                                <Form.Label>Product Price</Form.Label>
                                <Form.Control type="text" placeholder="Enter Product Price" value={price} onChange={(e)=>setPrice(e.target.value)}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicDescription">
                                <Form.Label>Product Description</Form.Label>
                                <Form.Control type="text" placeholder="Enter Product Description" value={description} onChange={(e)=>setDescription(e.target.value)}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicImage">
                                <Form.Label>Product Image</Form.Label>
                                <Form.Control type="file" placeholder="Enter Product Image" value={file} onChange={(e)=>setFile(e.target.value)}/>
                            </Form.Group>
                            <Button variant="primary" onClick={addProduct}>
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
        
    );
}

export default Add;
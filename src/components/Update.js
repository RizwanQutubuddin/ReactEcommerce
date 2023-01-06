import React, { useEffect, useState } from "react";
import Header from "./Header";
import { useParams,useNavigate } from "react-router-dom";
import { Button, Col, Container, Form, Row } from "react-bootstrap";


function Update() { 
    
    const [product, setProduct] = useState({});
    let [name, setName] = useState('');
    let [price, setPrice] = useState('');
    let [description, setDescription] = useState('');
    let [file, setFile] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        
        fetchData(id);
    }, []);

    async function fetchData(id) {
        let result = await fetch('http://127.0.0.1:8000/api/product/'+id);
        result = await result.json();
        setProduct(result); 
        setName(result.name);
        setPrice(result.price);
        setDescription(result.description);
        // console.log(result);
    }

    async function updateProduct(id) { 
        const formData = new FormData();
        formData.append("name", name);
        formData.append("price", price);
        formData.append("description", description);
        formData.append("file", file);

        let result = await fetch('http://127.0.0.1:8000/api/update-product/'+id,{
            method: 'POST',
            body: formData
        });
        result = await result.json();
        console.log("result",result);
        navigate('/');

    }
    return (
        <>
            <Header/>
            <Container>
                <Row>
                    <Col md={{ span: 4, offset: 4 }}>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Product Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Product Name" defaultValue={product.name?product.name:''} onChange={(e)=>setName(e.target.value)}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPrice">
                                <Form.Label>Product Price</Form.Label>
                                <Form.Control type="text" placeholder="Enter Product Price" defaultValue={product.price?product.price:''} onChange={(e)=>setPrice(e.target.value)}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicDescription">
                                <Form.Label>Product Description</Form.Label>
                                <Form.Control type="text" placeholder="Enter Product Description" defaultValue={product.description?product.description:''} onChange={(e)=>setDescription(e.target.value)}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicImage">
                                <Form.Label>Product Image</Form.Label>
                                <Form.Control type="file" placeholder="Enter Product Image" onChange={(e)=>setFile(e.target.files[0])}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicImage">
                                <Form.Label>Product Image</Form.Label>
                                <img style={{ width: 150 }} src={product.file_path?"http://localhost:8000/"+product.file_path:'' } alt="img" />
                            </Form.Group>
                            <Button variant="primary" onClick={()=>updateProduct(product.id)}>
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
        
    );
}

export default Update;
// export default MemoryRouter(Update);
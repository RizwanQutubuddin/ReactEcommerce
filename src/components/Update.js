import React, { useEffect, useState } from "react";
import Header from "./Header";
import { useParams } from "react-router-dom";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

function Update() { 
    const { id } = useParams();
    const [product, setProduct] = useState({});
    let [name, setName] = useState('');
    let [price, setPrice] = useState('');
    let [description, setDescription] = useState('');
    let [file, setFile] = useState('');

    useEffect(() => {
        
        fetchData(id);
    }, []);

    async function fetchData(id) {
        let result = await fetch('http://127.0.0.1:8000/api/product/'+id);
        result = await result.json();
        setProduct(result); 
        setName(product.name);
        setPrice(product.price);
        setDescription(product.description);
        setFile(product.file_path);
    }

    function updateProduct() { 

        
        console.log("product",product)
        let item = { id,name, price, description, file };
        
        // const formData = new FormData();
        // formData.append("name", name);
        // formData.append("price", price);
        // formData.append("description", description);
        // formData.append("file", file);
        // console.log(item);
        // let result = await fetch('http://127.0.0.1:8000/api/update-product/'+id, {
        //     method: 'POST',
        //     body: formData
        // });
        // result = await result.json();
        console.log("done",item);
        // localStorage.setItem('user-info', JSON.stringify(result));
        //navigate('/home');

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
                                <Form.Control type="text" placeholder="Enter Product Name" value={product.name?product.name:''} onChange={(e)=>setName(e.target.value)}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPrice">
                                <Form.Label>Product Price</Form.Label>
                                <Form.Control type="text" placeholder="Enter Product Price" value={product.price?product.price:''} onChange={(e)=>setPrice(e.target.value)}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicDescription">
                                <Form.Label>Product Description</Form.Label>
                                <Form.Control type="text" placeholder="Enter Product Description" value={product.description?product.description:''} onChange={(e)=>setDescription(e.target.value)}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicImage">
                                <Form.Label>Product Image</Form.Label>
                                <Form.Control type="file" placeholder="Enter Product Image" onChange={(e)=>setFile(e.target.value)}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicImage">
                                <Form.Label>Product Image</Form.Label>
                                <img style={{ width: 150 }} src={product.file_path?"http://localhost:8000/"+product.file_path:'' } />
                            </Form.Group>
                            <Button variant="primary" onClick={updateProduct}>
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
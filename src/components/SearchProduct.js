import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

const SearchProduct = () => {
    let [name, setName] = useState('');
    useEffect(() => { 
        
    })
    const navigate = useNavigate();
    
    async function addProduct() { 
        
        const formData = new FormData();
        formData.append("name", name);
        formData.append("price", price);
        formData.append("description", description);
        formData.append("file", file);
        let result = await fetch('http://127.0.0.1:8000/api/add-product', {
            method: 'POST',
            body: formData
        });
        result = await result.json();
        console.log("result",result);
        navigate('/');

    }
    return (
        <>
            <Header />
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Image</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((item,key) =>
                            <tr key={key}>
                            <td>{key+1}</td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.description}</td>
                            <td><img style={{ width: 150 }} src={"http://127.0.0.1:8000/" + item.file_path} /></td>
                            <td><Button variant="danger" onClick={() => { deleteOperation(item.id) }}>Delete</Button> | <Link className="warning" to={"/update/"+item.id }>Update</Link></td>
                        </tr>
                        )
                    }
                    
                </tbody>
            </Table>
        </>
        
    );
}

export default SearchProduct;
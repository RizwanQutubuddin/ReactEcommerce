import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "./Header";

const Home = () => {
    let [products, setProducts] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        let result = await fetch('http://127.0.0.1:8000/api/all-products');
        result = await result.json();
        setProducts(result);
    }

    async function deleteOperation(id){ 
        let result = await fetch('http://127.0.0.1:8000/api/delete-product/' + id, {
            method:"delete"
        });
        result = await result.json();
        if (result.result === 201) {
            fetchData();
            alert(result.message);
        } else { 
            alert(result.message);
        }
    };

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
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((item,key) =>
                        <tr key={key}>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.description}</td>
                            <td><img style={{ width: 150 }} src={"http://127.0.0.1:8000/" + item.file_path} /></td>
                                <td><Button variant="danger" onClick={() => { deleteOperation(item.id) }}>Delete</Button></td>
                                <td><Link className="warning" to={"/update/"+item.id }>Update</Link></td>
                        </tr>
                        )
                    }
                    
                </tbody>
            </Table>
        </>
        
    );
}

export default Home;
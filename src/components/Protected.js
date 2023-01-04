import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


function Login(props) { 
    let Cmp = props.Cmp;

    const navigate = useNavigate();
    
    useEffect(() => {
        if (!localStorage.getItem('user-info')) {
            navigate('/login');
        }

    }, []);

    return (
        <>
            <Cmp/>
        </>
    );
}

export default Login;
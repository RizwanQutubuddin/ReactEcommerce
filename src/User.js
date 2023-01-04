import React from "react";

const User = (props) => { 
    
    const {data} = props;
    console.log(props);
    return (
        <>
        <h2>user component</h2>
        <h3>{data.name}</h3>
        <h3>{data.age}</h3>
        </>
    )
}

export default User;
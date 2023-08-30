import React from "react";


const input = ({ onInputChange }) => {
    return (
        <>
            <input type="text" placeholder="enter the task" onChange={onInputChange} />
        </>
    )

}


export default input; 
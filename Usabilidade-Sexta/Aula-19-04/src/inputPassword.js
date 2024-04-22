import React from "react";

function InputPassword({label, id, name, password}){
    return(
    <div>
        <label htmlFor={id}>{label}</label>
        <input type={password} id={id} name={name} required/>
    </div>
    );
}

export default InputPassword;
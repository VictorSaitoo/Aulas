import React from "react";

function InputText({label, id, name, text}){

    return(

    <div>
        <label htmlFor={id}>{label}</label>
        <input type={text} id={id} name={name} required/>
    </div>

    );
}

export default InputText;
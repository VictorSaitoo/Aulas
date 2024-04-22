import React from "react";

function Button({submit, value}){
    return(
        <div>
            <input type={submit} value={value}/>
        </div>
    );
}

export default Button;
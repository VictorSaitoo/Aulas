import React from "react";
import axios from "axios";
import { useState } from "react";

const GET_TOKEN_URL = `https://reqres.in/api/login`;

function GetToken(){
    const[token, setToken] = useState(null);
    const[error, setError] = useState(null);

    const fetchToken = async () => {
        try{
            const response = await axios.get(GET_TOKEN_URL);
            const accessToken = response.data.token
            setToken(accessToken);
        }catch(err){
            setError(err.message);
        }
    }
    return(
        <div>
            <h2>Obter Token</h2>
            <button onClick={fetchToken}>Obter Token</button>
            {token && <p>Token: {token}</p>}
        </div>
    )
}

export default GetToken;
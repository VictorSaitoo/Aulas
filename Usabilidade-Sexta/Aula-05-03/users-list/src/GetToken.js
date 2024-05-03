import React, { useState } from "react";
import axios from "axios";

const GET_TOKEN_URL = `https://reqres.in/api/login`;

function GetToken(){
    const [token, setToken] = useState(null);
    const [error, setError] = useState(null);

    const fetchToken = async() => {
        try{
            const response = await axios.get(GET_TOKEN_URL);
            const accessToken = response.data.token;
            setToken(accessToken);
        }catch(err){
            setError(err.message);
        }
    }
    return(
        <div>
            <h2>Obter Token de acesso</h2>
            <button onClick={fetchToken}>Obter Token</button>

        </div>
    );
}

export default GetToken;

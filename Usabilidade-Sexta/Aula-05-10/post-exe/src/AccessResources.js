import React from "react";
import axios from 'axios';
import { useState } from "react";

const PROTECTED_URL = `https://reqres.in/api/users`;

function AccessResources(){
    const [token, setToken] = useState('');
    const [data, setData] = useState(null);
    const [error,setError] = useState(null);

    const fetchProtectdData = async () => {
        try{
            const response = await axios.post(PROTECTED_URL, null, {
            header:{
                Authorization:`Bearer${token} `,
            },
            });
            setData(response.data);
        }catch(err){
        setError(err.message);
    }
};
    return(
        <div>
            <h2>Acessar Recursos</h2>
            <input 
            type="text"
            placeholder="Token de Acesso"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            />
            <button onClick={fetchProtectdData}>Acessar Recursos</button>
            {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
            {data && <p>Erro: {error}</p>}
        </div>
    )
}

export default AccessResources;
import React, { useEffect, useState } from "react";
import axios from "axios";

const USERS_API_LIST = 'https://reqres.in/api/users?page=1'

function UserList(){
    const[users, setUsers] = useState([]);
    const[error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async() =>{;
            try{
            const response = await axios.get(USERS_API_LIST);
            setUsers(response.data.data);
            }catch(err){
            setError(err.message);
            }
        }
    fetchUsers();
    },[]);

    return(
        <div>
            <h2>Lista de usuários</h2>
            {error ? (
                <p>Erro ao obter usuários: {error}</p>
                ) : (
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>
                            <img src={user.avatar} alt={`{$user.first_name} ${user.last_name}`}/>
                            <p> {user.first_name} {user.last_name}</p>
                            <p>Email: {user.email}</p>

                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default UserList;

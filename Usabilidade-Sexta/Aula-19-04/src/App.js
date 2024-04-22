import React from "react";
import InputText from "./inpuText";
import './style.css';
import InputPassword from "./inputPassword";
import Button from "./Button";


function App(){
    return(
        <div className="container">
            <form>
                <h2>Tela de Login</h2>
                <InputText type ="text" label="Usuário" id="username" name="username"/>
                <InputPassword type="password" label="Senha" id="password" name="password"/>
                <div className="botao">
                <Button type="submit" value="Login"/>
                </div>
            </form>
        </div>
    );
}

export default App;
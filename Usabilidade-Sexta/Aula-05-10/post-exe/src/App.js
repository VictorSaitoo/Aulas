import React from "react";
import AccessResources from "./AccessResources";
import GetToken from "./GetToken";

function App(){
    return(
        <div>
            <h1>Aplicação post</h1>
            <GetToken/>
            <AccessResources/>
        </div>
    );
}

export default App;
import React from "react";

/*function OlaMundo(){
    return(
        <div>
            <h1>Olá mundo React!</h1>
            esta é a primeira aula de React!
        </div>
    );
}*/

//=======================================
// Arrow Functions
// é importante crair uma variavel com nome da funçãio que quer exportar pois obriga a usar uma variavel de mesmo nome onde importar

const HelloWorld =()=>{
    return(
        <div>
            <h1>Ola mundo com arrow function e variavel</h1>
        </div>
    );
}
export default HelloWorld;

//export default OlaMundo;
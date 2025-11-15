// ------------------------------- EJERCICIO A) -------------------------------

import {restar} from "./utils.js";
console.log(restar(8,3));
console.log(restar(5,6));
console.log(restar(30,9));

// ------------------------------- EJERCICIO B) -------------------------------

function verificarUsuario(usuario)
{
    return new Promise((resolve, reject) =>
    {
        if(usuario === "admin")
            resolve("Usuario válido: " + usuario)
        else
            reject("Usuario inválido: " + usuario)
    });
}

verificarUsuario("admin")
    .then(res => console.log(res))
    .catch(err => console.error(err));

verificarUsuario("Ivan")
    .then(res => console.log(res))
    .catch(err => console.error(err));


// ------------------------------- EJERCICIO C) -------------------------------

function simularPeticionAPI()
{
    return new Promise(resolve =>
    {
        setTimeout(() =>
        {
            resolve("Datos recibidos correctamente.");
        }, 5000);
    });
}

async function obtenerDatos() 
{
    let resultado = await simularPeticionAPI();
    console.log(resultado);
}

obtenerDatos();
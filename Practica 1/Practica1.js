const nombre = "Armando";
let edad = 25;

//nombre = "Ana Maria";
let saludo = "Hola, " + nombre + ". Tienes " + edad + " años.";

console.log(saludo);

//-------------------------------------------------------------------------------

const cuadrado = (numero) => numero * numero;
let resultado1 = cuadrado(10)
console.log(resultado1);

let resultado2 = cuadrado(8)
console.log(resultado2);

let resultado3 = cuadrado(50)
console.log(resultado3);

//-------------------------------------------------------------------------------

const saludoPersonalizado = (nombre, edad) => "Hola, me llamo " + nombre + " y tengo " + edad + " años.";
let resultado = saludoPersonalizado("Isay", 37)
console.log(resultado);

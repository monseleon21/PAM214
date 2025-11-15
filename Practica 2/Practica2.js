// ------------------------------------EJERCICIO 1--------------------------------------------

const persona =
{
    nombre: "Ivan Isay",
    edad: 37,
    direccion: 
    {
        ciudad: "Qro",
        pais: "MX"
    }
};

const {nombre, edad, direccion: {ciudad}} = persona;
console.log("Me llamo " + nombre + ", tengo " + edad + " años y vivo en " + ciudad)

// ------------------------------------EJERCICIO 2--------------------------------------------

const productos = 
[
    {nombre: "Laptop", precio: 12000},
    {nombre: "Mouse", precio: 250},
    {nombre: "Teclado", precio: 750},
    {nombre: "Monitor", precio: 3000},
];

let nombres = productos
    .filter(productos => productos.precio > 1000)
    .map(productos => productos.nombre)

console.log(nombres);

// ------------------------------------EJERCICIO 3--------------------------------------------

const personas = 
[
    {nombre: "Ana", edad: 22},
    {nombre: "Luis", edad: 35},
    {nombre: "Maria", edad: 28}
];

let encontrar = personas.find(personas => personas.nombre === "Luis")
console.log(encontrar)

personas.forEach(personas => console.log(personas.nombre, personas.edad))

let suma = personas.reduce((acumulador, personas) => {return acumulador + personas.edad}, 0)
console.log(suma)
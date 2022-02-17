console.log("Hello Word")
// document.write("contenido para insertar en mi HTML");
// alert("Este es un alerta generado desde Jav Script")
var nombre1 = "Jose Miguel Perez del Valle Nacido";
var nombre2
const nombre3 ="Jose Constante";
let nombre4 = "Jose Local";

let numero = 24
let numero1 = ("25")

console.log(numero + 3)
console.log(numero1 + 3)

const allowedToAccess = true;

// ARRAYS

let paisesLationoamerica = ["Argentina", "Brasil", "Chile" , "Uruguay", "Peru"]

let listadoDeValoresMixtos = ["Jose", 20, "Amado", true, 1987, "velez", 1.20, "Tucuman"]

console.log(listadoDeValoresMixtos)

// para acceder a un valor en particular 
console.log(listadoDeValoresMixtos[4])  

console.log("El equipo de " + listadoDeValoresMixtos[0] + " es " + listadoDeValoresMixtos[5])

// OBJETOS
let persona = {
    name: "JoseObj", 
    lastname: "Amado",
    age: 20,
    isActive: true,
    bornDate: 1987,
    isSuscribed: false,
    discount: 1.2,
    country: "Argentina",
    state: "Tucuman",
    team: "Velez",
}
console.log(persona.name)
console.log(persona.age)
console.log(persona["age"])

console.log("Objeto: El equito de" + persona.name + " es " + persona.team)

let alumnosArray = [
    "Argumedo",
    "Benitez",
    "Contreras",
]
console.log(alumnosArray[0]);

// FORMA COMBINADA
let alumnos = [
    {fullName: "Argumedo Roberto", course: "FullStack", notas:[10, 20]},
    {fullName: "Benitez Pablo", course: "FullStack", notas:[10, 20]},
    {fullName: "Contreras Sergio", course: "React Avanzado", notas:[10, 20]},
];

alumnos[1].notas[2] = 15; 
alumnos[1].notas.push = 15;
console.log(alumnos)
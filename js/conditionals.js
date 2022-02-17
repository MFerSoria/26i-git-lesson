const age = parseInt(prompt("Ingrese su edad"));
console.log(age);
const normalPrice = 1000
let finalPrice;
//  >=
if(age >18) {
    // Codigo que voy a ejecutar si la edd es mayor o igual que 8 = true
    console.info("Usted es ayor de edad, puede ingresar");
} else if(age > 12) {
    console.warn("Para podr ingresar debe tener autorizacion de su mayor a cargo")
} else {
    console.error("No tiene edad permitida para ingresar");
}
// PERSONA INGRESE SU EDAD Y QUE BASADA EN ELLA PUEDA OBTENER EL PRECIO FINAL QE ABONARA CON SU ENTRADA AL CINE
//  VALOR DE ENTRADA AL CINE ES DE $1000
//  PERSONAS MAYORES DE 55 AÑOS TIENEN UN DESCUENTO DEL 40%
//  PERSONAS ENTRE 18 Y 55 AÑOS NO TIENEN DESCUENTO
//  PERSONAS ENTRE 10 Y 18 TIENEN 20% DE DESCUENTO
//  PERSONAS MENORES ABONAN $250

const valorEntradaCine = 1000;
const edad = prompt("Edada de la persona que ingresa al cine");
const valorEntradaJubilado = valorEntradaCine*0.6;
const valorEntradaAdolescente = valorEntradaCine*0.8;
const valorEntradaNiños = $250

if(edad > 55) {
    console.info("El valor de la entrada es $" + valorEntradaJubilado)
} else if(edad > 18){
    console.info("El valor de la entrada es $" + valorEntradaCine);
} else if(edad > 10) {
    console.info("El valor de la entrada es $" + ValorEntradaAdolescente);
} else {
    console.inNfo("El valor de la entrada es $" + valorEntradaNiños);
}
console.log("No sigue evaluando la condicion");
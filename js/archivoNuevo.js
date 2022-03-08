// Persona ingrese su edad y que basado en ella pueda obtener el precio final que abonara con su entrada al cine
// valor de entrada al cine es de $1000
// Personas mayor de 55 años tiene un descuento %40
// Personas entre 18 y 55 (54) no tienen descuento
// Personas entre 10 y 18 adolescentes tienen un 20% descuento
// Peronas menores abonan $250 unicamente

const valorEntradaCine = 1000;
const valorEntradaJubilado = valorEntradaCine * 0.6;
const valorEntradaAdolescente = valorEntradaCine * 0.8;
const valorDescuento = valorEntradaCine * 0.5;
const valorEntradaNiños = 250;
let costoTotalDeEntradas = 0;
const cantidadDePersonas = prompt("Ingrese la cantidad de miembros de la familia");

//   inicializador          condicion          incrementador
for (let i = 1; i <= cantidadDePersonas; i++) {
    // Todo lo q se ejecutara dentro dle bucle siempre q se cumpla la condicion

    const edad = prompt("Edad de la persona que ingresa al cine");
 
     if(edad > 55) {
         console.info("El valor de la entrada es $ " + valorDescuento);
         costoTotalDeEntradas = costoTotalDeEntradas + valorDescuento;
    } else if(edad >= 18) {
        console.info("El valor de la entrada es $ " + valorEntradaCine);
        costoTotalDeEntradas = costoTotalDeEntradas + valorEntradaCine; //1000
    } else if(edad >= 10) {
        console.info("El valor de la entrada es $ " + valorEntradaAdolescente);
        costoTotalDeEntradas = costoTotalDeEntradas + valorEntradaAdolescente;
    } else { 
        console.info("El valor de la entrada es $ " + valorEntradaNiños);
        costoTotalDeEntradas = costoTotalDeEntradas + valorEntradaNiños;
    }
}

console.log(`El valor total a abonar es de ${costoTotalDeEntradas} de contado`)
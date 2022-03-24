const paisesMundialObject = [
    {
        name: 'Francia',
        year: 2018
    },
    {
        name: 'Alemania',
        year: 2014
    },
    {
        name: 'España',
        year: 2010
    },
    {
        name: 'Italia',
        year: 2006
    },
    {
        name: 'Brasil',
        year: 2002
    },
    {
        name: 'Francia',
        year: 1998
    },
    {
        name: 'Brasil',
        year: 1994
    },
    {
        name: 'Alemania',
        year: 1990
    },
    {
        name: 'Argentina',
        year: 1986
    },
    {
        name: 'Italia',
        year: 1982
    },
    {
        name: 'Argentina',
        year: 1978
    },
    {
        name: 'Alemania',
        year: 1974
    },
    {
        name: 'Brasil',
        year: 1970
    },
    {
        name: 'Inglaterra',
        year: 1966
    },
    {
        name: 'Brasil',
        year: 1962
    },
    {
        name: 'Brasil',
        year: 1958
    },
    {
        name: 'Alemania',
        year: 1954
    },
    {
        name: 'Uruguay',
        year: 1950
    },
    {
        name: 'Italia',
        year: 1938
    },
    {
        name: 'Italia',
        year: 1934
    },
    {
        name: 'Uruguay',
        year: 1930
    },
];

// SE LEE POR CADA ELEMENTO QUE SE ENCUENTRE SE VA A EJECUTAR ALGO, LOS() SIGNIFICAN EJECUTAR
//  LA PALABRA FUNCTION SE LA PUEDE REEMPLAZAR CON LA FLECHA =>
// paisesMundialObject.forEach(function(){
//     console .log('se esta ejecutando el bucle')
// })
// paisesMundialObject.forEach((elemento)=> {
//     console .log(elemento)
// });

// console .log(paisesMundialObject)
// let brasilCampeonatosGanados = [];
// paisesMundialObject.forEach((paisGanador, indice) => {
//     // console .log(paisGanador)
//     // Preguntar si el pais que estamos analizando es Brasil
//     // Si el pais fue Brasil vamos a insertar el año dentro del array brasilCampeonatos
//     if(paisGanador.name == 'Brasil'){
//         brasilCampeonatosGanados.push(paisGanador.year)
//         // console .log(paisGanador.name , indice)
//         paisesMundialObject.splice(indice, 1, "Brasil Campeon")
//     }
// }

// console.log(paisesMundialObject)
// console .log('Brasil gano el mundial en los siguientes años' , brasilCampeonatosGanados)

// let paisesMayuscula = paisesMundialObject.map (element => {
//     return element.name.toUpperCase();
// })

// console.log(paisesMundialObject)
// console.log(paisesMayuscula)

// let paisesMundialBrasil = paisesMundialObject.map((pais)=> {
//     return pais;
// })
// const brasil = [];
// paisesMundialObject.forEach(paisGanador => {
//     if(paisGanador.name == 'Brasil'){
//         brasil.push(paisGanador)
//     }
// })
// console.log(brasil)

// const resto = [];
// paisesMundialObject.forEach(paisGanador => {
//     if(paisGanador.name !== 'Brasil') {
//         resto.push(paisGanador)
//     }
// })
// console .log(resto)

const resto = [];
const restoFilterMethod = paisesMundialObject.filter(seleccion => {
    // si defino todo en una sola linea no es necesario las llaves ni el return
    if(seleccion.name !== 'Brasil' && seleccion.name !== 'Alemania') {
        return true;
    }
    return false;
})
console .log(restoFilterMethod)
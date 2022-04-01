// Traemos una base de datos: Paises de Latinoamerica
// const paisesLatam = [
//     'Argentina',
//     'Bolivia',
//     'Brasil',
//     'Chile',
//     'Colombia',
//     'Ecuador',
//     'Guyana',
//     'Guyana Francesa',
//     'Paraguay',
//     'Peru',
//     'Suriname',
//     'Uruguay',
//     'Venezuela'
// ];
// console .log(paisesLatam)

// for (let i = 0; i < paisesLatam.length; i++) {
    // Length es una propiedad de los arrays que permite ver la cant de items q tiene mi lista, por eso se usa esta condicion para que si se agregan o quitan paises de mi lista la condion se cambie automaticamente sin tener q yo modificar el numero

    // Ejecuar acciones de acuerdo a cada pais
//     const paisActual = paisesLatam[i];
//     console .log('Pais actual '+ paisActual);
//     console .log(`Pais actual +{i+1}: ${paisActual}`)
// }
const paisesQueGanaronUnMundial = [
    'Francia',
    'Alemania',
    'España',
    'Italia',
    'Brasil',
    'Francia',
    'Brasil',
    'Alemania',
    'Argentina',
    'Italia',
    'Argentina',
    'Alemania',
    'Brasil',
    'Inglaterra',
    'Brasil',
    'Brasil',
    'Alemania',
    'Uruguay',
    'Italia',
    'Italia',
    'Uruguay',
]

let franciaCampeon = 0;
let brasilCampeon = 0;
let argentinaCampeon = 0;
let alemaniaCampeon = 0;

// for (let i =  0; i < paisesQueGanaronUnMundial.length; i++){
//     console .log(paisesQueGanaronUnMundial[i]);
//     if(paisesQueGanaronUnMundial[i] == 'Argentina') {
//         argentinaCampeon = argentinaCampeon + 1;
//     } else if(paisesQueGanaronUnMundial[i] == 'Brasil') {
//         brasilCampeon = brasilCampeon + 1;
//     } else if(paisesQueGanaronUnMundial[i] == 'Francia'){
//         franciaCampeon = franciaCampeon + 1;
//     } else if(paisesQueGanaronUnMundial[i] == 'Alemania') {
//         alemaniaCampeon = alemaniaCampeon + 1;
//     }
// }

// OTRA OPCION ES HACER LO MISMO PERO SOLO CON LOS IF, SE PONE EL IF CON LA CONDICION SI CUMPLE SE EJECUTA ALGO, SINO SIGUE CON LA SIGUIENTE LINEA QUE ES OTRO IF (NO HAY ELSE) 

 switch (paisesQueGanaronUnMundial) {
    case 'Argentina':
        argentinaCampeon = argentinaCampeon + 1;
        break;
    case 'Brasil':
        brasilCampeon = brasilCampeon + 1;
        break;
    case 'Francia':
        franciaCampeon = franciaCampeon + 1;
        break;
    case 'Alemania':
        alemaniaCampeon = alemaniaCampeon + 1;
        break;
    default:
        'error en el pais';
 }


console .log('Argentina gano el mundial: ' + argentinaCampeon + ' veces');
console .log('Brasil gano el mundial: ' + brasilCampeon + ' veces');
console .log('Francia gano el mundial: ' + franciaCampeon + ' veces');
console .log('Alemania gano el mundial: ' + alemaniaCampeon + ' veces');

const paisesObject = [
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

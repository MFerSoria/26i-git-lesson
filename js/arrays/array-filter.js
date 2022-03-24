const paisesGanadoresDeMundiales = [
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
const inputBuscadorHTML = document.getElementById('buscadorPais')

// function saludar(nombre, sexo) {
//     let letra = 'a';
//     if(sexo == 'M') {
//         letra = 'o'
//     }
//     console .log(`Bienvenid${letra} ${nombre} a nuestro sitio`)
// }
// saludar('Fernanda', 'F');
// saludar('Martin', 'M')

// function recorrerArray() {
//     paisesGanadoresDeMundiales.forEach(function(pais) { console.log(pais)})
// }

// function calcularPrecioEnDolar(dolar, valorEnPesos) {
//     const precioPesos = dolar * valorEnPesos
//     console . log(precioPesos)
// }

function buscarPais(eventoDeJs) {
    const criterioDeBusqueda = eventoDeJs.target.value;
    const paisesFiltrados = paisesGanadoresDeMundiales.filter(pais => {
        if(pais.name.toLowerCase() == criterioDeBusqueda.toLowerCase()) {
            return true
        }
        return false
    })  
    console .log(paisesFiltrados)
}
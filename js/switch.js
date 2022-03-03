console .log('condicionales switch');
let signo = prompt('Ingrese su signo del zodiaco');
// signo = signo.toLowerCase();

switch(signo .toLowerCase()) {
    case 'aries':
        console .log('Su fecha de nacimiento es Abril')
        break;
    case 'tauro':
        console .log('Su fecha de nacimiento es en Mayo')
        break;
    case 'geminis':
        console .log('Su fecha de nacimiento es en Junio')
        break;
    case 'cancer':
        console .log('Su fecha de nacimiento es en Julio')
        break;
    case 'leo':
        console .log('Su fecha de nacimiento es Agosto')
        break;
    case 'virgo':
        console .log('Su fecha de nacimiento es en Septiembre')
        break;
    case 'acuario':
        console .log('Su fecha de nacimiento es en Octubre')
        break;
    case 'picis':
        console .log('Su fecha de nacimiento es en Noviembre')
        break;
    default:
        console .log('Signo incorrecto')
}

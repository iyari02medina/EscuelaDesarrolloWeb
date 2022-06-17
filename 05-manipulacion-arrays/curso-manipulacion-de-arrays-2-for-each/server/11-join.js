// El método join() une todos los elementos de una matriz (o un objeto similar a una matriz) en una cadena y devuelve esta cadena.

const elements = ['fire', 'air', 'water']

// solucion con for 

let rtaFor = '';
const separador = '--';
for (let i = 0; i<elements.length; i++){
    const element = elements[i];
    rtaFor = rtaFor + element + separador;
}

// solucion Join
const rtaJoin = elements.join('--');
console.log(rtaFor);
console.log(rtaJoin)

// ejercio 2

const title = 'Curso de manipulacion de arrays';
const urlFinal = title.split(' ').join('-').toLocaleLowerCase();
console.log(urlFinal);
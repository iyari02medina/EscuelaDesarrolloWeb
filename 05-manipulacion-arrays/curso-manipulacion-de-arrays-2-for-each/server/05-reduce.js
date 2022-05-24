/* 
El método reduce() ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.
 */

const totals = [1,2,3,4,5,6,7,8,9];

// suma con for
let sum = 0;
for(let i = 0; i<totals.length; i++){
    const element = totals[i];
    sum = sum + element;
};
console.log(sum);

// suma con reduce
const rta = totals.reduce((sum, element) => sum + element, 0);
console.log(rta)
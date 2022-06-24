// El método concat() se usa para unir dos o más arrays. Este método no cambia los arrays existentes, sino que devuelve un nuevo array.

const elements = [1,2,3,4];
const otherElement = [5,6,7,8];

// solucion con for 
let rta = [...elements];
for(let i = 0; i< otherElement.length; i++){
    const element = otherElement[i];
    rta.push(element);
}
console.log(rta);

// colucion concat

const rta2 = elements.concat(otherElement);
console.log(rta2)
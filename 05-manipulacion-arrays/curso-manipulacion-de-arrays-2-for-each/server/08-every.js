// Determina si todos los elementos en el array satisfacen una condición.

const numbers = [1, 30, 49, 29, 10, 13];

// Solucion con for 

let rta = true; 
for(let i = 0; i<numbers.length; i++){
    const element = numbers[i];
    if(element >= 40){
        rta = false;
    }
}
console.log('for', rta);

const rta2 = numbers.every(item => item <= 40);
console.log('every', rta2)


/* reto */

const team = [
  {
    name: "Nicolas",
    age: 12,
  },
  {
    name: "Andrea",
    age: 8,
  },
  {
    name: "Zulema",
    age: 2,
  },
  {
    name: "Santiago",
    age: 18,
  },
];

const rta3 = team.every(item => item.age <=15);
console.log(rta3);


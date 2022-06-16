// El método find() devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.

const numbers = [1, 30, 49, 29, 10, 13];

// metodo con for 
let rta = undefined;
for(let i = 0; i<numbers.length; i++){
    const element = numbers[i];
    if(element === 30){
        rta = element;
        break;
    }
}
console.log(rta)

// metodo find 

const rta2 = numbers.find((i)=> i === 30);
console.log(rta2);

// ejercicio 2

const products = [
  {
    name: "Pizza",
    price: 12,
    id: "🍕",
  },
  {
    name: "Burger",
    price: 23,
    id: "🍔",
  },
  {
    name: "Hot dog",
    price: 34,
    id: "🌭",
  },
  {
    name: "Hot cakes",
    price: 355,
    id: "🥞",
  },
];

const rta3 = products.find((i) => i.id === "🍔");
console.log(rta3);
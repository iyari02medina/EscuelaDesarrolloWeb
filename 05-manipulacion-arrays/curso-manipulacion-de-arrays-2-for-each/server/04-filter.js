/*
  El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.
 */

const words = ['spray', 'limit', 'elite', 'exuberant'];

// filtrar con for 
const newArray =[];
for(let index = 0; index < words.length; index++){
    const item = words[index];
    if(item.length >= 6){
        newArray.push(item);
    };
};

console.log('newArray', newArray);
console.log('original', words);
const rta = words.filter(item => item.length >=6);
console.log('rta', rta);
console.log('original', words);

const orders = [
  {
    consumerName: "Nicolas",
    total: 60,
    deliverd: true,
  },
  {
    consumerName: "Zulema",
    total: 120,
    deliverd: false,
  },
  {
    consumerName: "Santiago",
    total: 180,
    deliverd: true,
  },
  {
    consumerName: "Japlin",
    total: 240,
    deliverd: true,
  },
];

const rta3 = orders.filter(item => item.deliverd && item.total >=100);
console.log(rta3);

// Buscador con filter 

const serch = (query) => {
    return orders.filter(item => {
        return item.consumerName.includes(query);
    });
};
console.log(serch('Nico'))


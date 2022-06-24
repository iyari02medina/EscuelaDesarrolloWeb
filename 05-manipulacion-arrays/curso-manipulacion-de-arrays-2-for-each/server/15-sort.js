// El método sort() ordena los elementos de un arreglo (array) localmente y devuelve el arreglo ordenado. La ordenación no es necesariamente estable

const months = ["March", "Jan", "Feb", "Dec"];

const numbers = [1, 30, 4, 21, 100000];
numbers.sort((a,b) => a-b);
console.log(numbers)

const words = [
  "réservé",
  "premier",
  "communiqué",
  "café",
  "adieu",
  "éclair",
  "banana",
];
words.sort();
console.log(words)
const orders = [
  {
    customerName: "Nicolas",
    total: 600,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 1840,
    delivered: true,
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  },
];
orders.sort((a,b)=>a.total - b.total)
console.log(orders)
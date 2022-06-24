// El método flat() crea una nueva matriz con todos los elementos de sub-array concatenados recursivamente hasta la profundidad especificada.

const matriz = [[1,2,3],[4,5,6], [7,8,9]];

// metodo for

const newArray = [];
for(let i = 0; i<matriz.length; i++){
    const array = matriz[i];
    for(let j = 0; j< array.length; j++){
        const element = matriz[i][j];
        newArray.push(element)
    }
}
console.log(newArray)

// metodo flat()

const rta = matriz.flat();
console.log(rta);

// El método flatMap() primero mapea cada elemento usando una función de mapeo, luego aplana el resultado en una nueva matriz. Es idéntico a un map seguido de un flatten (en-US)de profundidad 1, pero flatMap es a menudo útil y la fusión de ambos en un método es ligeramente más eficiente.

const users = [
  { userId: 1, username: "Tom", attributes: ["Nice", "Cute"] },
  { userId: 2, username: "Mike", attributes: ["Lovely"] },
  { userId: 3, username: "Nico", attributes: ["Nice", "Cool"] },
];

const rta2 = users.map((users) => users.attributes).flat();
console.log(rta2);

const rta3 = users.flatMap((users) => users.attributes);
console.log(rta3)

// ejercicio 2 

const calendars = {
  primaryCalendar: [
    {
      startDate: new Date(2021, 1, 1, 15),
      endDate: new Date(2021, 1, 1, 15, 30),
      title: "Cita 1",
    },
    {
      startDate: new Date(2021, 1, 1, 17),
      endDate: new Date(2021, 1, 1, 18),
      title: "Cita 2",
    },
  ],
  secondaryCalendar: [
    {
      startDate: new Date(2021, 1, 1, 12),
      endDate: new Date(2021, 1, 1, 12, 30),
      title: "Cita 2",
    },
    {
      startDate: new Date(2021, 1, 1, 9),
      endDate: new Date(2021, 1, 1, 10),
      title: "Cita 4",
    },
  ],
};

const rta4 = Object.values(calendars).flatMap((item) => {
    console.log('item', item);
    return item.map((date) => date.startDate)
});
console.log(rta4)

// ejercicio 3:
// En este desafío tienes array de strings y cada línea es un fragmento, el Zen de Python, tu reto es hacer un método que retorne el número de palabras totales que tiene el array.

function solution(lines){
 	return lines.flatMap(line => line.split(' ')).length;
}; 

console.log(solution([
  "Beautiful is better than ugly",
  "Explicit is better than implicit",
  "Simple is better than complex",
  "Complex is better than complicated",
]));


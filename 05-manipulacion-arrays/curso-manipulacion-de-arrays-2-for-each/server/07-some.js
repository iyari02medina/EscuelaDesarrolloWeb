/* 
El método some() comprueba si al menos un elemento del array cumple con la condición implementada por la función proporcionada.
 */

const numbers = [1,2,3,4];

// condicion con for para encontrar si algun elmento es par
let rta = false; 
for (let i = 0; i<numbers.length; i++){
    const element = numbers[i];
    if(element % 2 === 0){
        rta = true;
        break; // corta el ciclo for, porque queriamos ver solo si un elemento del array es par 
    };
};
console.log(rta)

// condicion con some

const rta2 = numbers.some(item => item % 2 ===0);
console.log(rta2);

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

const rta3 = orders.some(item => item.deliverd);
console.log(rta3);

const dates = [
  {
    startDate: new Date(2021, 1, 1, 10),
    endDate: new Date(2021, 1, 1, 11),
    title: "Cita de trabajo",
  },
  {
    startDate: new Date(2021, 1, 1, 15),
    endDate: new Date(2021, 1, 1, 15, 30),
    title: "Cita con mi jefe",
  },
  {
    startDate: new Date(2021, 1, 1, 20),
    endDate: new Date(2021, 1, 1, 21),
    title: "Cena",
  },
];
const newAppointment = {
    startDate: new Date (2021, 1, 1, 19),
    endDate: new Date (2021, 1, 1, 20, 30)
};
const areIntervalsOverlapping = require("date-fns/areIntervalsOverlapping"); // libreria de colicion de citas
const isOverlap = (newDate) => {
    return dates.some(date => {
        return areIntervalsOverlapping (
            {start:date.startDate, end: date.endDate}, 
            {start: newDate.startDate, end: newDate.endDate},)
    });
};

console.log(isOverlap(newAppointment));g
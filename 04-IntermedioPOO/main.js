// objeto
const juan = {
  name: "Juanito",
  age: 18,
  approvedCourses: ["Curso 1"],
  // metodo
  addCourse(newCourse) {
    this.approvedCourses.push(newCourse);
  },
};

// propiedades estaticas del prototipo object
/* console.log(Object.keys(juan));
console.log(Object.getOwnPropertyNames(juan));
console.log(Object.getOwnPropertyDescriptors(juan));
console.log(Object.entries(juan)); */

// nuevas propiedades en un objeto con metodo estatico de object 
// recibe 3 argumentos (nombre objeto, nombre de la nueva propiedad, lista de atributos)
Object.defineProperty(juan, "navigator", {
  value: "Chrome",
  enumerable: false, // propiedad no aparece cuando lo listamos con 'Object.Keys()'. si aparece con "getOwnPropertyNames()"
  writable: true,
  configurable: true,
});
Object.defineProperty(juan, "editor", {
  value: "VSCode",
  enumerable: true,
  writable: false, // aparece cuando lo listamos con 'Object.Keys()' y "getOwnPropertyNames()". no se puede modificar el valor, si se puede borrar la propiedad
  configurable: true,
});
Object.defineProperty(juan, "terminal", {
    value: "WSL",
    enumerable:true,
    writable:true,
    configurable:false,
});
Object.defineProperty(juan, "pruebaNASA", {
    value: "extraterrestres",
    enumerable: false,
    writable: false,
    configurable: false,
});
    console.log(Object.getOwnPropertyDescriptors(juan));
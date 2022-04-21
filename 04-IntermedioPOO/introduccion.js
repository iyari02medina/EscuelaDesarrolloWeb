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
/* 
1. console.log(Object.keys(juan));
2. console.log(Object.getOwnPropertyNames(juan));
3. console.log(Object.getOwnPropertyDescriptors(juan));
4. console.log(Object.entries(juan)); */

//  / / / / / / / / / / Nuevas Propiedades en un Objeto con Metodo Estatico de Object / / / / / / / / / / 

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
    configurable:false, // impide que podamos borrar propiedades de nuestros objetos
});
Object.defineProperty(juan, "pruebaNASA", {
  value: "extraterrestres",
  enumerable: false, // propiedad no aparece cuando lo listamos con 'Object.Keys()'. si aparece con "getOwnPropertyNames()"
  writable: false, // aparece cuando lo listamos con 'Object.Keys()' y "getOwnPropertyNames()". no se puede modificar el valor, si se puede borrar la propiedad
  configurable: false, // impide que podamos borrar propiedades de nuestros objetos
});
  
console.log(Object.getOwnPropertyDescriptors(juan));

// objeto
const juan2 = {
  name: "Juanito",
  age: 18,
  approvedCourses: ["Curso 1"],
  // metodo
  addCourse(newCourse) {
    this.approvedCourses.push(newCourse);
  },
};

Object.seal(juan2) // todas las propiedades tienen "configurable: false" es decir que no se puede borrar las propiedad 
//Object.freeze(juan2) // todas las propiedades tienen "configurable: false" y  " writable: false,". no se pueden borrar ni modificar las propiedades


console.log(Object.getOwnPropertyDescriptors(juan2));
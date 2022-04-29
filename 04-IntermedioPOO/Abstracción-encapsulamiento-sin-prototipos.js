// / / / / / / / / / / / / / /  Deep copy con recursividad / / / / / / / / / / / / / / / /

// 1. Crear funciones para ver  si es un objeto o un array

function isObject(subject) {
  return typeof subject == "object";
}
function isArray(subject) {
  return Array.isArray(subject);
}

// 2. funcion recursiva

function deepCopy(subject) {
  let copySubject;
  // 3. validar si es objeto o array
  const subjectIsObject = isObject(subject);
  const subjectIsArray = isArray(subject);

  if (subjectIsArray) {
    copySubject = [];
  } else if (subjectIsObject) {
    copySubject = {};
  } else {
    return copySubject;
  }
  // 4. Ejecutar codigo por cada una de las propiedades dentro del elento
  for (key in subject) {
    const keyIsObject = isObject(subject[key]);
    // 5. validar si la propiedad dentro del elemento es un objeto o un array
    if (keyIsObject) {
      // 6. funcion recursiva para cada uno de las propiedades
      copySubject[key] = deepCopy(subject[key]);
    } else {
      if (subjectIsArray) {
        copySubject.push(subject[key]);
      } else {
        copySubject[key] = subject[key];
      }
    }
  }

  return copySubject;
}

// / / / / / / / / / / / / Abstraccion si Prototipo / / / / / / / / / / / / / / 

// Objeto Molde

const studentBase = {
    name : undefined,
    email: undefined,
    age: undefined,
    approvedCourses: undefined,
    learningPaths: undefined,
    socialMedia: {
        twitter: undefined,
        instagram: undefined,
        facebook: undefined,
    },
};

// Nuevo objeto 

const iyari = deepCopy(studentBase);
/* Object.defineProperty(iyari, "name", { // propiedad que no queremos que se borre
    value: "Ilario",
    configurable: false,
}); */
Object.seal(iyari); // Ninguna propiedad se pueda eliminar
Object.isSealed(iyari); // Preguntamos a JS si todas las propiedades estan protegidas con "Object.seal()"
Object.isFrozen(iyari); // Preguntamos a JS si todas las propiedades estan protegidas con "Object.frozen()"

// / / / / / / / / / / / / / /  Factory pattern y RORO / / / / / / / / / / / / / /

/*  
Nos ayudan a crar moldes de objetos a travez de funciones
 */

function requiredParam(param){ // funcion para los parametros que son obligatorios dentro del objeto molde
    throw new Error(param + " Este parametro es obligatorio")
}

//Objeto Molde
function createStudent({
  // definimos las propiedades que vamos a recibir en el objeto como parametro dentro de una funcion
  name = requiredParam("name"),
  email = requiredParam("email"),
  age,
  twitter,
  instagram,
  facebook,
  approvedCourses = [],
  learningPaths = [],
} = {}) {
  // El parametro que recibe la funcion es igual a un objeto bacio "={}"

  // Guardamos propiedades privadas que no se pueden modificar directamente 
  const private = {
      "_name": name,
  } 

   // Aqui guardamos todas las propiedades publicas 
  const public = {
    age,
    email,
    socialMedia: {
      twitter,
      instagram,
      facebook,
    },
    approvedCourses,
    learningPaths,
    get name(){
        return private["_name"];
    },
    set name(newName){
        if(newName.length != 0){
            private["_name"] = newName;
        } else {
            console.warn("Tu nombre debe tener al menos 1 caracter")
        }
    },
    // El codigo de abajo se sustituye por (Get, Set)
    /* readName(){
        return private["_name"]
    },
    changeName(newName) {
      private["_name"] = newName;
    }, */
  }; 

// protegemos propiedades del objeto public para que este no pueda ser ni borrado ni editado.   
  /* Object.defineProperty(public, "readName",{
      configurable: false,
      writable: false,
  });
  Object.defineProperty(public, "changeName",{
      configurable: false,
      writable: false,
  }); */
  
  return public;
};

const japlin = createStudent({
    name: "Japs",
    age: 18,
    email: "japlin@gmail.com",
    twitter: "@japsmm"
})
 



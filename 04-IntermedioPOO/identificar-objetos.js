// / / / / / / / / / / / / / /  Deep copy con recursividad / / / / / / / / / / / / / / / /

// Crear funciones para ver  si es un objeto o un array

function isObject(subject) {
  return typeof subject == "object";
}
function isArray(subject) {
  return Array.isArray(subject);
}

// funcion recursiva para copiar objetos

function deepCopy(subject) {
  let copySubject;
  // validar si es objeto o array
  const subjectIsObject = isObject(subject);
  const subjectIsArray = isArray(subject);

  if (subjectIsArray) {
    copySubject = [];
  } else if (subjectIsObject) {
    copySubject = {};
  } else {
    return copySubject;
  }
  //  Ejecutar codigo por cada una de las propiedades dentro del elento
  for (key in subject) {
    const keyIsObject = isObject(subject[key]);
    //  validar si la propiedad dentro del elemento es un objeto o un array
    if (keyIsObject) {
      //  funcion recursiva para cada uno de las propiedades
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

// / / / / / / / / / / / / / /  Factory pattern y RORO / / / / / / / / / / / / / /

/*  
Nos ayudan a crar moldes de objetos a travez de funciones
 */

// funcion para los parametros que son obligatorios dentro del objeto molde
function requiredParam(param) {
  throw new Error(param + " Este parametro es obligatorio");
}
// Objeto Molde
function createLearningPath({ name = requiredParam("name"), courses = [] }) {
  const private = {
    _name: name,
    _courses: courses,
  };

  const public = {
      // acceder al nombre de mi ruta de aprendizaje
    get name() {
      return private["_name"];
    },
    // actualizar el nombre de mi ruta de aprendizaje
    set name(newName) {
      if (newName.length != 0) {
        private["_name"] = newName;
      } else {
        console.warn("Tu nombre debe tener al menos 1 caracter");
      }
    },

    get courses() {
      return private["_courses"];
    },
  };

  return public;
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
    "_learningPaths" : learningPaths,
  };

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
    get name() {
      return private["_name"];
    },
    set name(newName) {
      if (newName.length != 0) {
        private["_name"] = newName;
      } else {
        console.warn("Tu nombre debe tener al menos 1 caracter");
      }
    },
    // acceder a mis rutas de aprendizaje 
    get learningPaths(){
        return private ["_learningPaths"]
    },
    // seter ruta de aprendizaje validando que exista una ruta de aprendizade 
    set learningPaths(newLP){
        if (!newLP.name){
            console.warn ("Tu LP no tiene la propiedad name");
            return; // "return" impide que se siga ejecutando el codigo si se comple la condicion 
        }
        if (!newLP.courses){
            console.warn ("Tu LP no tiene courses");
            return;
        }
        if (!isArray(newLP.courses)) {
            console.warn("Tu LP no es una lista de (*cursos)");
            return;
        }
        private["_learningPaths"].push(newLP)
    },
  };

  return public;
}

const juan = createStudent({email: "juanito@frijoles.com",  name: "Juanito"})

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
};

// funcion para los parametros que son obligatorios dentro del objeto molde
function requiredParam(param) {
  throw new Error(param + " Este parametro es obligatorio");
}

// / / /  Prototipo

function LearningPath({ name = requiredParam("name"), courses = [] }) { // los prototipos inician con mayusculas
    this.name = name;
    this.courses = courses;

//     const private = {
//     _name: name,
//     _courses: courses,
//   };

//   const public = {
    // acceder al nombre de mi ruta de aprendizaje
//     get name() {
//       return private["_name"];
//     },
     // actualizar el nombre de mi ruta de aprendizaje
//     set name(newName) {
//       if (newName.length != 0) {
//         private["_name"] = newName;
//       } else {
//         console.warn("Tu nombre debe tener al menos 1 caracter");
//       }
//     },

//     get courses() {
//       return private["_courses"];
//     },
//   };

//   return public;
}

//Objeto Molde
function Student({
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
    // validar si learningPaths es un array
    this.name = name;
    this.email = email;
    this.age = age;
    this.socialMedia = {
      twitter,
      instagram,
      facebook
    };
    this.approvedCourses = approvedCourses;


    if(isArray(learningPaths)){
        this._learningPaths = [];
        
        // validar  cada elemento dentro de learningPaths
        for (learningPathIndex in learningPaths) {
          this.learningPaths = learningPaths[learningPathIndex]
        }
    }
}

// Propiedades que queremos protejer
Object.defineProperty(Student.prototype, "learningPaths", {
  get(){
    return this._learningPaths;
  },
  set(newLp) {
    
      // validar si cada elemento es una instancia del prototipo leraningPaths
      if ( newLp instanceof LearningPath) {
        this._learningPaths.push(newLp);
      } else {
        console.warm("Alguno de los learning paths no es una instancia del prototipo LearningPath")
      }
    
  }
});

// Nueva instancia del prototipo Student 
const escuelaWeb = new LearningPath ({name: "Escuela de WebDev"});
const escuelaData = new LearningPath ({name: "Escuela de Data science"});
const juan = new Student({ email: "juanito@frijoles.com", name: "Juanito",
learningPaths: [
  escuelaWeb,
  escuelaData 
]});

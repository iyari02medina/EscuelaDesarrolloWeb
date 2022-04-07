// / / / / / / / / / / / / / / / / / OBJETO LITERAL / / / / / / / / / / / / / / /

const natalia = {
  name: "Natalia",
  age: 20,
  cursosAprobados: [
    "Curso definitivo de HTML y CSS",
    "Curso Practico de HTML Y CSS",
  ],
  aprobarCurso(nuevoCursito) {
    // es una funcion, se puede omitir la palabra "function"
    this.cursosAprobados.push(nuevoCursito);
  },
};

// / / / / / / / / / / / / / / / / / PROTOTIPO / / / / / / / / / / / / / / /

function Student(name, age, cursosAprobados) {
  (this.name = name),
    (this.age = age),
    (this.cursosAprobados = cursosAprobados);
  /* this.aprobarCurso = function(nuevoCursito){  // creacion de metodo por dentro 
        this.cursosAprobados.push(nuevoCursito)
    } */
}

Student.prototype.aprobarCurso = function (nuevoCursito) {
  // creacion de metodo por fuera
  this.cursosAprobados.push(nuevoCursito);
};

// nueva instancia
const juanita = new Student("Juanita Alejandra", 15, [
  "Curso profesional de JavaScript",
  "Curso de creacion de videojuegos",
]);

// / / / / / / / / / / / /  Prototipo con la sintaxis de clases / / / / / / / / / /

class Studen2 {
  constructor({ name, age, email, cursosAprobados = [] }) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
    this.email = email;
  }
  //Metodo
  aprobarCurso(nuevoCursito) {
    this.cursosAprobados.push(nuevoCursito);
  }
}

// nueva instancia
const miguelito = new Studen2({
  email: "miguelito@placsi.com",
  age: 28,
  name: "Miguel",
});

// / / / / / / / Ventajas de la programacion orientasa a objetos / / / / / / /

// Prototipo
class Student3 {
  constructor({
    name,
    email,
    username,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
    approvedCourses = [],
    learningPaths = []
  }) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.socialMedia = {
      twitter,
      instagram,
      facebook,
    }
    this.approvedCourses = approvedCourses;
    this.learningPaths = learningPaths;
  }
}
class LearningPaths {
  constructor({
    name,
    courses = [],
  }) {
    this.name= name;
    this.courses= courses;
  }
}

// istancia 
const desarrolloWeb = new LearningPaths({
  name: "Escuela de Desarrollo WEB",
  courses: ["Curso definitivo de HTML y CSS", "Curso Practico de HTML Y CSS"],
});

const juan2 = new Student3 ({
  name: "JuanDC",
  username: "juandc",
  email: "juanito@platzi.com",
  twitter: "fjuandc",
  learningPaths: [desarrolloWeb],
})

const miguel2 = new Student3({
  name: "Miguelito",
  username: "miguelitofeliz",
  email: "miguelito@platzi.com",
  instagram: "miguelito_feliz",
});


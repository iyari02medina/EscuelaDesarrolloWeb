
// / / / / / / / ABSTRACCION EN LA PROGRAMACION ORIENTADA O OBJETOS / / / / / / /

// Polimorfismo
class Comment {
  constructor({
    content,
    studentName,
    studentRole = "estudiante",
  }) {
    this.content = content;
    this.studentName = studentName;
    this.studentRole = studentRole;
    this.likes = 0;
  }

  // metodo
  publicar(){
    console.log(this.studentName + "(" + this.studentRole + ")");
    console.log(this.likes + " Likes");
    console.log(this.content)
  }
}

// Prototipo
class Student3 { // clase madre
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

  publicarComentario(commentContent) {
    const comment = new Comment ({
      content: commentContent,
      studentName: this.name,
    });
    comment.publicar();
  }

}

class FreeStudent extends Student3{ // "extends" para crear una extencion de la clase madre
  constructor(props){ // "props" es para decir que todas las propiedades de nuestras instancias esten enviando. "props puede ser cualquier nombre"
    super(props); //"super()" nos permite referenciar al constructor de nuestra clase madre
  }

  // metodo
  approvedCourse(newCurse){
    if(newCurse.isFree){
      this.approvedCourses.push(newCurse);
    } else {
      console.warn("Lo sentimos, " + this.name + ", solo puedes tomar cursos abiertos");
    }
  }
} 

class BasicStudent extends Student3 {
  constructor(props) {
    super(props);
  }

  approvedCourse(newCurse) {
    if (newCurse.lang !== "english") {
      this.approvedCourses.push(newCurse);
    } else {
      console.warn(
        "Lo sentimos, " + this.name + ", no puedes tomar cursos en ingles"
      );
    }
  }
}

class ExpertStudent extends Student3 {
  constructor(props) {
    super(props);
  }

  approvedCourse(newCurse) {
      this.approvedCourses.push(newCurse);   
  }
}

class LearningPaths {
  constructor({
    name,
    courses = [],
  }) {
    this._name= name;
    this.courses= courses;
  }
  get name(){
    return this._name
  }
  set name(nuevoNombre){
    if (
      nuevoNombre !== desarrolloWeb.name ||
      nuevoNombre !== escuelaData.name ||
      nuevoNombre !== escuelaVideojuegos.name
    ) {
      console.error("No lo haga compa");
    }
  }
}

class Courses {
  constructor({
    name,
    clases = [],
    isFree = false,
    lang = "spanish"
  }) {
    this._name = name; // con el "_" le pedimo a los programadores que no llamen el atributo name
    this.clases= clases;
    this.isFree = isFree;
    this.lang = lang;
  }
  get name(){
    return this._name
  }
  set name(nuevoNombrecito){
    if (
      nuevoNombrecito !== cursoProgBasica.name ||
      nuevoNombrecito !== cursoDefHtmlCss.name ||
      nuevoNombrecito !== cursoPracHtmlCss.name  
    ) {
      console.error("No lo haga compa");
    } else {
      this._name = nuevoNombrecito;
    }
  }
}

class TeacherStudent extends Student3 {
  constructor(props) {
    super(props);
  }

  approvedCourse(newCurse) {
    this.approvedCourses.push(newCurse);
  }

  publicarComentario(commentContent) {
    const comment = new Comment({
      content: commentContent,
      studentName: this.name,
      studentRole: "profesor",
    });
    comment.publicar();
  }
}

// istancia 
const cursoProgBasica = new Courses ({
  name: "Curso gratis de programacion basica",
  isFree: true,
});

const cursoDefHtmlCss = new Courses({
  name: "Curso definitivo de HTML y CSS",
});

const cursoPracHtmlCss = new Courses({
  name: "Curso Practico de HTML Y CSS",
  lang: "english",
});


const desarrolloWeb = new LearningPaths({
  name: "Escuela de Desarrollo WEB",
  courses: [cursoProgBasica, cursoDefHtmlCss, cursoPracHtmlCss],
});

const escuelaData = new LearningPaths({
  name: "Escuela de Data Science",
  courses: [cursoProgBasica, "Curso de data business", "Curso de Data viz"],
});

const escuelaVideojuegos = new LearningPaths({
  name: "Escuela de Desarrollo de Videojuegos ",
  courses: [cursoProgBasica, "Curso Unity", "Curso de Unreal"],
});

const juan2 = new FreeStudent ({
  name: "JuanDC",
  username: "juandc",
  email: "juanito@platzi.com",
  twitter: "fjuandc",
  learningPaths: [desarrolloWeb, escuelaData],
})

const miguel2 = new BasicStudent({
  name: "Miguelito",
  username: "miguelitofeliz",
  email: "miguelito@platzi.com",
  instagram: "miguelito_feliz",
  learningPaths: [escuelaData, escuelaVideojuegos]
});

const freddy = new TeacherStudent({
  name: "Freddy Vega",
  username: "freddier",
  email: "f@gep.com",
  instagram: "freddier",
});

// / / / / / / / / / / / / / / / ENCAPSULAMENTO / / / / / / / / / / 

// prototipo
function videoPlay(id){
  const urlSecreta = "https://platzisecreto.com" + id;
  console.log("Se esta reproduciendo desde la url" + urlSecreta)
}

function videoStop(id){
  const urlSecreta = "https://platzisecreto.com" + id;
  console.log("Pausamos la url" + urlSecreta)
}

 class PlatziClass { // usamos "export" para definir en los modulos, cuales son los unicos bloques de codigo, con el cual podemos ejecutar desde cualquir otro script 
  constructor({
    name,
    videoID,
  }) {
    this.name = name;
    this.videoID = videoID;
  }
  reproducir(){
    videoPlay(this.videoID)
  }
  pausar(){
    videoStop(this.videoID) 
  }
}


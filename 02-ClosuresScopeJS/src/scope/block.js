const fruit = () => {
    if (true){
      var fruit1 = "apple"; // se puede acceder por que se establece en el entorno global dentro de la funcion
      let fruit2 = "banana"; // no se acceder porque se establecen dentro del bloque
      const fruit3 = "kiwi"; // no se acceder porque se establecen dentro del bloque
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

let x = 1;
{
    let x = 2;
    console.log(x); // 2
}
console.log(x); // 1

var y = 1;
{
    var y = 2;
    console.log(y); // 2
}
console.log(y); // 2

const anotherFunction = () => {
    for(var i= 0; i<10; i++){
        setTimeout(() => {
          console.log(i); // 10 10 10 10 10 10 10 10 10 10
        }, 1000)
    }
}
anotherFunction(); 

const anotherFunction2 = () => {
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log(i); // 0 1 2 3 4 5 6 7 8 9
    }, 1000);
  }
};
anotherFunction2(); 
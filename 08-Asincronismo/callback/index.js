// Una función de callback es una función que se pasa a otra función como un argumento, que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción.

// ejemplo 1
function sum(num1, num2){
    return num1 + num2;
}

function calc(num1, num2, callback){
    return callback(num1, num2)
}

console.log(calc(2,2,sum));

// ejemplo 2 
setTimeout(function(){
    console.log('Hola JavaScript');
}, 200)

function gretting(name){
    console.log(`hola ${name}`)
}

setTimeout(gretting, 2000, 'Iyari')
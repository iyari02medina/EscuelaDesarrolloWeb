const obj1 = {
    a:"a",  
    b: "b",
    c: {
        d: "d",
        e: "e"
    }
};

const stringifiedComplexObj = JSON.stringify(obj1);
const obj2 = JSON.parse(stringifiedComplexObj);      
//JSON (stringify-parse) no son capaz de poder copiar metodos dentro de objetos 

// / / / / / / / / / / / /  RECURSIVIDAD ESTRUCTURA / / / / / / / / / / / / / / / / 

//function recursiva(){
//    if(/* Validacion */){        // funciona con cualquier statement
        // llamador recursivos
//    } else {
        //llamados normales sin recursividad
//    }
//};

// Statement normal
const numeritos = [1,2,3,4,5,6,7,8,9,4,5,6,2,45,528,21,24,5,2];
/* 
let numerito = 0;
for(let index = 0; index < numeritos.length; index++){
    numerito = numeritos[index];
    console.log({index, numerito});
} 
*/

// funcion recursiva
function recursiva(numbersArray){
    if(numbersArray.length != 0){
        const firstNum = numbersArray[0];
        console.log(firstNum);
        numbersArray.shift();
       return recursiva(numbersArray);
    }
}
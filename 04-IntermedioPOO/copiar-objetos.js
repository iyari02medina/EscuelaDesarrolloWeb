const obj1 = {
    a:"a",  
    b: "b",
    c: {
        d: "d",
        e: "e"
    },
    editA(){
        this.a = "AAAAA";
    }
};

const stringifiedComplexObj = JSON.stringify(obj1);
const obj2 = JSON.parse(stringifiedComplexObj);      
//JSON (stringify-parse) no son capaz de poder copiar metodos dentro de objetos 

// / / / / / / / / / / / /  RECURSIVIDAD  / / / / / / / / / / / / / / / / 

// Estructura

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

// / / / / / / / / / / / / / /  Deep copy con recursividad / / / / / / / / / / / / / / / / 

// 1. Crear funciones para ver  si es un objeto o un array 

function isObject (subject){
    return typeof subject == "object";
}
function isArray (subject){
    return Array.isArray(subject);
}

// 2. funcion recursiva 

function deepCopy(subject){
    let copySubject;
// 3. validar si es objeto o array 
    const subjectIsObject = isObject(subject);
    const subjectIsArray = isArray(subject);

    if(subjectIsArray){
        copySubject = [];
    } else if (subjectIsObject) {
        copySubject = {}; 
    } else {
        return copySubject;
    }
// 4. Ejecutar codigo por cada una de las propiedades dentro del elento 
    for(key in subject){
        const keyIsObject = isObject(subject[key]);
// 5. validar si la propiedad dentro del elemento es un objeto o un array 
        if(keyIsObject){
// 6. funcion recursiva para cada uno de las propiedades
            copySubject[key] = deepCopy(subject[key])
        } else {
            if(subjectIsArray){
                copySubject.push(subject[key]);
            } else {
                copySubject[key] = subject[key]
            }
        }
    }

    return copySubject;
}




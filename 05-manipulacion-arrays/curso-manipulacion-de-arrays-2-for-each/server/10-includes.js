// El método includes() determina si una matriz incluye un determinado elemento, devuelve true o false según corresponda.

const pets = ['cat', 'dog', 'bat'];

// metodo con for

let rta = false;
for(let i = 0; i<pets.length; i++){
    const element = pets[i];
    if(element === 'dog'){
        rta = true;
        
    }
}
console.log(rta);

// metodo includes 

const rta2 = pets.includes('dog')
console.log(rta2)

// ejercicio 2

function solution(words, query){
    return words.filter((word) =>
    word.toLowerCase()
    .includes(query.toLowerCase()) 	);
}; 

console.log(solution(["ana", "santi", "nico", "anastasia"], "an"));
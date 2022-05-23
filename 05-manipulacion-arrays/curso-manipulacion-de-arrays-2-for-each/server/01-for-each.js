const letters = ['a','b','c'];

for (let index = 0; index < letters.length; index++) {
    const element = letters[index];
    console.log('for',element);
}

// METODO DE ARRAYS 

letters.forEach(item => console.log('forEach', item)) // ".forEach()" sustituye al ciclo for 



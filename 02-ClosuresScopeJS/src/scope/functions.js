const fruits = () => {
    var fruit = 'apple';
    console.log(fruit);
}

fruits();
console.log(fruit) // no se imprime porue "fruit" esta en un scope local

const anotherFunction = () => {
    var x = 1;
    var x = 2;
    let y = 1;
    //let y = 2; // a "let" no se le reasignan valores
    console.log(x); // 2
    console.log(y); // 1
}
anotherFunction();

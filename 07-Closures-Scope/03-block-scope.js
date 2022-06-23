function fruit(){
    if(true){
        var fruit1 = 'apple';
        const fruit2 = 'kiwi';
        let fruit3 = 'Bannana';
    }
    console.log(fruit1) // function scope
    console.log(fruit2) // block scope
    console.log(fruit3) // block scope 
}
fruit()
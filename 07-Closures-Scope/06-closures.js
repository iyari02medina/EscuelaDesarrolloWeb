// tienes una closure cuando una funsion cualquiera accede a una variable furera de su contexto 

const myGlobal = 0; 

function myFunction() {
    const myNumber = 1;
    console.log(myGlobal);

    function parent(){
        const inner = 2;
        console.log(myNumber, myGlobal);

        function child(){
            console.log(inner, myNumber, myGlobal)
        }
        return child();
    }
    return parent()
}

myFunction(); 

// ejemplo practico

function greetig(){
    let username = 'japlin';

    function displayUsername(){
        return `hello ${username}`;
    }
    return displayUsername;
}

const g = greetig();
console.log(g);
console.log(g())

// ejemplo my money box sin closere

function moneyBox(coins){
    let saveCoins = 0; 
    saveCoins += coins;
    console.log(`Money Box : $${saveCoins}`);
}

moneyBox(5);
moneyBox(5);

// ejemplo my money box con closure

function moneyBox2(){
    let saveCoins = 0;

    function countCoins(coins){
        saveCoins += coins;
        console.log(`Money box : $${saveCoins}`);
    }
    return countCoins;
}

const myMoneyBox = moneyBox2();
myMoneyBox(5);
myMoneyBox(5);
myMoneyBox(15);
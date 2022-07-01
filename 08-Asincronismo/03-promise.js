// El objeto Promise representa la eventual finalización (o falla) de una operación asincrónica y su valor resultante.

const promise = new Promise(function(resolve,reject){
    resolve('hey!')
});

const cows = 9;   

const countCows = new Promise(function(resolve, reject){
    if(cows > 10){
        resolve(`We have ${cows} on the farm`)
    } else {
        reject('There is no cows in the farm')
    }
});

countCows.then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error)
})
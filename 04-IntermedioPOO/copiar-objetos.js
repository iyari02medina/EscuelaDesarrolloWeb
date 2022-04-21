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
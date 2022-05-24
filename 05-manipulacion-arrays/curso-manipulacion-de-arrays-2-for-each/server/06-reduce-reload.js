const items = [1,2,3,3,3,4,2,5,2];
const rta = items.reduce((obj,item) => {
    if (!obj[item]){
        obj[item] = 1;
    } else {
        obj[item] += 1;
    }
    return obj;
}, {})
console.log(rta);
const data = [
    {
        name: "Nicolas",
        level: "low",
    },
    {
        name: "Andrea",
        level: "medium",
    },
    {
        name: "Zulema",
        level: "hight",
    },
    {
        name: "Santiago",
        level: "low",
    },
    {
        name: "Valentina",
        level: "medium",
    },
    {
        name: "Lucia",
        level: "hight",
    },
];

const rta3 = data
.map(item => item.level)
.reduce((obj,item) => {
    if(!obj[item]){
        obj[item] = 1;
    } else {
        obj[item] = obj[item] + 1;
    }
    return obj;
}, {});
console.log(rta3);

const num = [1,5,3,8,6,4,0,8,6,4,2,8,0,10,10,6];
const rta4 = num.reduce((obj,item)=>{
    if(item <= 5){
        obj['1-5']++;
    }
     if (item >= 6 && item < 9){
        obj['6-8']++;
    } else {
        obj['9-10']++;
    }
    return obj;
}, {
    '1-5': 0,
    '6-8': 0,
    '9-10': 0,
});
console.log(rta4)
const orders = [
    {
        consumerName: 'Nicolas',
        total: 60,
        deliverd: true,
    },
    {
        consumerName: 'Zulema',
        total: 120,
        deliverd: false,
    },
    {
        consumerName: 'Santiago',
        total: 180,
        deliverd: true,
    },
    {
        consumerName: 'Japlin',
        total: 240,
        deliverd: true,
    },
];
console.log('original', orders);
const rta = orders.map(item =>item.total);
console.log(rta);

const rta2 = orders.map(item =>{
    item.tax = 0.19;
    return item;
});
console.log('rta2', rta2);
console.log('original', orders)
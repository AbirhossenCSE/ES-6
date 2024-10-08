// // filter
// const numbers = [4, 5, 6, 7, 8];
// const players = [74, 65, 67, 55, 72, 59];

// const selected = players.filter(p => p > 70);
// const selected2 = players.filter(p => p > 60);
// const selected3 = players.filter(p => p % 2 === 1);

// console.log(selected, selected2, selected3);


// // find
// const friends = ['tom', 'jerry', 'john', 'micheal', 'josna'];
// const lenghts = friends.filter(frnd => frnd.length > 4);
// console.log(lenghts);


// const selected4 = players.find(players => players > 70);
// console.log(selected4);



// // reduce
// const numbers2 = [4, 5, 6, 74, 12, 1];
// const total = numbers2.reduce( (previous, current) => previous + current, 0);
// console.log(total);

// const sum = numbers2.reduce( (p, c) => p + c, 0);
// console.log(sum);




// Array of Object
const products5 = [
    {id: 1, name: 'Lenovo', price: 65000},
    {id: 2, name: 'dell', price: 60000},
    {id: 3, name: 'hp', price: 40000},
    {id: 4, name: 'mac', price: 165000}
];

// Map
const names = products5.map(product => product.name);
console.log(names);

const prices = products5.map(p => p.price);
console.log(prices);


// forEach
products5.forEach(p => console.log(p.id));

// filter
const expensive = products5.filter( p => p.price > 60000);
console.log(expensive);

// find
const affordable = products5.find( p => p.price < 50000);
console.log(affordable);


// reduce
const total5 = products5.reduce((acum, current) => acum + current.price, 0);
console.log(total5);


// const glass = {
//     name: 'glass',
//     color: 'golden',
//     price: 12,
//     isCleaned: true
// }

// console.log(glass);
// const keys = Object.keys(glass);
// console.log(keys);

// const values = Object.values(glass);
// console.log(values);

// const pair = Object.entries(glass);
// console.log(pair);







// // looping
// const numbers = [1, 2, 4, 6];

// for (const num of numbers){
//     console.log(num);
    
// }

// const nobab = 'Siraj Ud Doula';
// for (const char of nobab){
//     console.log(char);
    
// }


const glass2 = {
    name: 'glass',
    color: 'golden',
    price: 12,
    isCleaned: true
}
// for (const key in glass2){
//     const value = glass2[key];
//     console.log(key, value);
    
// }

// optional
const keys = Object.keys(glass2);
console.log(keys);

for (const key of keys){
    const value = glass2[key];
    console.log(key, value);
    
}

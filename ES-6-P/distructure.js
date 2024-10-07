const actor = {
    name: 'ananta',
    age: 30,
    phone: '012334556',
    money: 1234567
}

const phone1 = actor.phone;
const name = actor.name;
const age = actor.age;

console.log(phone);
console.log(phone);
console.log(phone);
console.log(name);
console.log(name);
console.log(name);
console.log(age);
console.log(age);
console.log(age);
console.log(age);

// advance way
// if right side is an object left side of destracting as well
const {phone, age: boyos} = actor;
console.log(phone);
console.log(boyos);




// Array destructuring
const numbers = [45, 99];


// advance
function doubleThem(a, b){
    return [a*2, b*2];
}
const [prothon, ditio] = doubleThem(6, 9);
console.log(prothon, ditio);

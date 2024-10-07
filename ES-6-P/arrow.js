function add (a, b) {
    const result = a + b;
    return result;
}
const sum = add(5, 8);
console.log(sum);




function add2 (a, b) {
    return a + b;
}

const sum2 = add2(6, 8);
console.log(sum2);



// function ecpression
const add3 = function(a, b){
    return a + b;
}

// arrow function
const add4 = (a, b) => a + b;

const additioon = add4(10, 11);
console.log(additioon);


const multiply = (a, b) => a * b;
const mult = multiply(5, 5);
console.log(mult);



// Single perameter
const getAge = (person) => person.age;
const student = { name: 'abir', age: 22};
const age = getAge(student);
console.log(age);


const getThird = Numbers => Numbers[2];
const third = getThird([5, 55, 44, 66]);
console.log(third);



// No perameter
const getPI = () => Math.PI;
console.log(getPI());



// large arrow function
const doMath = (x, y, z) => {
    const sum = x + y + z;
    const mult = x * y * z;
    const result = sum + mult;
    return result;
}

const xz = doMath(5, 6, 3);
console.log(xz);

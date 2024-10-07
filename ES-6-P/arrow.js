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

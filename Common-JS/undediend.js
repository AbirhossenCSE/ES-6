
// Veriable not initialized
let first;
console.log(first);


// Function with no return
function second(a, b){
    const total = a + b;
}
const result = second();
console.log(result);


// Perameter that is not passed
function third(a, b, c, d){
    const total = a + b + c + d;
    console.log(a, b, c, d);
    
}
third(2, 5)


// not returning
function noNegative(a, b){
    if (a < 0 || b < 0) {
        return;
    }
    return a + b;
}

const totalNo = noNegative(4, 5);
console.log(totalNo);



const fifth = {id: 2, name: 'modon', age: 40};
console.log(fifth.age, fifth.salary);


const sixth = [4, 54, 65, 25, 32];
console.log(sixth[1], sixth[5], sixth[10]);


console.log(typeof undefined);
console.log(typeof null);


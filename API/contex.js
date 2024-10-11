let a = 5;
function add(num1, num2){
    const result = num1 + num2 + a;
    return result;
}

const sum = add(4, 5);
console.log(sum);


console.log(1);
console.log(2);

doSomething();
setTimeout(doSomething, 4000);

console.log(4);
console.log(5);


function doSomething(){
    console.log(3);
    
}
function sum(a, b, c){
    // console.log(arguments[2]);
    const arg = [...arguments];
    console.log(arg);

    const result = a + b + c;
    return result;
}

const total = sum(45, 54, 21)
console.log(total);

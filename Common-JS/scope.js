function add(a, b){
    const total = a + b;
    console.log(a, b);
    return total;
    
}
const result = add(4, 5);
console.log(result);


Closure

function kitchen(){
    let roast = 0;
    return function(){
        roast++;
        return roast;

    }
}
const firstServer = kitchen();
console.log(firstServer());
console.log(firstServer());
console.log(firstServer());
console.log(firstServer());

const numbers = [4, 5, 6, 7, 8];

function doubleIt(num) {
    console.log('Num', num);
    
    return num * 2;

}

const result = numbers.map(doubleIt);
console.log(result);


// Advance Short tecnique
const double2 = n => n * 2;

const output = numbers.map(double2);
console.log('The double output', output);

// Another
const output2 = numbers.map(n => n * 2);
console.log(output2);


const fiveadd = numbers.map(n => n + 5);
console.log(fiveadd);



const friends = ['tom', 'jerry', 'john', 'micheal'];
const lenghts = friends.map(frnd => frnd.length);
console.log(lenghts);

const firstLetter = friends.map(friend => friend[0]);
console.log(firstLetter);

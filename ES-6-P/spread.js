const max = Math.max(45, 65, 2, 6, 87, 89);
console.log(max);


const Numbers = [45, 54, 36, 12, 65, 100];
const arrayMax = Math.max(...Numbers);
console.log(arrayMax);
console.log(Numbers);
console.log(...Numbers);



// use speard operator to copy
const friend = [45, 55, 65, 25, 12];
const bondhu = [...friend];
bondhu.push(13);

console.log(friend);
console.log(bondhu);

// advance
const num = [...friend, 121];
console.log(num);


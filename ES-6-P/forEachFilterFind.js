// filter
const numbers = [4, 5, 6, 7, 8];
const players = [74, 65, 67, 55, 72, 59];

const selected = players.filter(p => p > 70);
const selected2 = players.filter(p => p > 60);
const selected3 = players.filter(p => p % 2 === 1);

console.log(selected, selected2, selected3);



const friends = ['tom', 'jerry', 'john', 'micheal', 'josna'];
const lenghts = friends.filter(frnd => frnd.length > 4);
console.log(lenghts);


const selected4 = players.find(players => players > 70);
console.log(selected4);

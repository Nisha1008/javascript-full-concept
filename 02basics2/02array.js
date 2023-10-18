const marvel_heros = ["thor","ironman","spidderman"]

const dc_heros = ["superman","flash","batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros[3]); //create nested array
const allheros= marvel_heros.concat(dc_heros) //single array
console.log(allheros);

const allValues = [...marvel_heros,...dc_heros] //spread operator
console.log(allValues);

const anotherArr = [1,2,3,[3,4,5],6,[7,8,9,[34,12]]];
console.log(anotherArr);
const second = anotherArr.flat(Infinity); //convert single aaray
console.log(second);

console.log(Array.isArray("nisha"));//false
console.log(Array.from("nisha"));//convert in array
console.log(Array.from({name:"nisha"}));

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));
//*************Numberss
const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));    //100.00

const otherNum = 34.899
console.log(otherNum.toPrecision(3)) //34.9

const hundreds = 1000000
console.log(hundreds.toLocaleString()); //1,000,000
console.log(hundreds.toLocaleString('en-IN')); //10,00,000


//***************Math

// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(8,5,3,2,1));
// console.log(Math.abs(9,6,4,32,1));
// console.log(Math.random()); //gives value inbetween 0 and 1
// 1 to 10000 
console.log(Math.floor(Math.random()*10000)+1); 

const min =10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min); 

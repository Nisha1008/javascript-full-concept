// // array

// const myArr= [3,2,2]
// const myheros = ['shaktiman','naagraj']
// const newArr= new Array(1,2,3,4,5)
// console.log(myArr[0]);

// //Array methods

// myArr.push(90)
// myArr.push(908)
// console.log(myArr);
// // myArr.pop()
// myArr.unshift(45);// console.log(myArr);insert at first
// console.log(myArr);
// myArr.shift()
// console.log(myArr);

// console.log(myArr.includes(1));
// console.log(myArr.indexOf(2));
// const newArrrr= myArr.join() 
// console.log(newArrrr)

// // slice and splice
// console.log("A ",myArr);

const arr = [1,2,3,4,5,6]
console.log(arr);
console.log("slice "+arr.slice(1,4)); //2,3,4 does not change array
console.log(arr); //1,2,3,4,5,6
console.log("splice "+arr.splice(1,4)); //2,3,4,5 it change array
console.log(arr); //1,6
//Primitive
// 7 type :String,Number ,Boolean,null,undefined,symbol//for making any value unique,BigInt
const score =100
const scroeValue = 100.2
const isLoggedIn = false
const outsideTemp = null
let useEmail; 
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId); //false

const bigNumber = 37453645364654326n
console.log(bigNumber);

//Refrenece type
// Array,Objects,Functions
// Array
const heros =["shaktima","doga","naagraj"]

//object
let myObj={
    name:"mmisha",
    age:22,
    class:"betch"
}

//function
const myFunction = function(){
    console.log("Hello world");
}


console.log(anotherId);


// ******************************
// stack(primitive) ,Heap(Non-Primitive)
// in stack get copy of variable but in heap get refrence of the objects
let myYouTube= "nisha"
let anotherName = myYouTube
anotherName="mehta"
console.log(myYouTube);
console.log(anotherName);


let user ={
    name:"nisha",
    agw:67,
    subject:"copy"
}

let userTwo = user;
userTwo.name="monal"
console.log(user);
console.log(userTwo);
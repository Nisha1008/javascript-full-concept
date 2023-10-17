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
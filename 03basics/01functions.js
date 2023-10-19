
function SayHello() {
    console.log("hello");
console.log("nisha");
console.log("hello");
console.log("nisha");
console.log("hello");
}

// function addTwoNum(num1,num2) {
//     console.log(num1+num2);
// }

// const result= addTwoNum(2,1);
// console.log(result); //undefined
function addTwoNum(num1,num2) {
 return num1+num2;
}

const result= addTwoNum(2,1);
// console.log(result); //3

function loginUserName(username="nis") {
    if(username==undefined){
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`    
}
const val=loginUserName()
// console.log(val);

function calculateCartPrice(...num1) {
    return num1;
}
console.log(calculateCartPrice(2,40,23,23));


const user={
    username:"nisha",
    age:34
}
function handleObj(anyObject) {
    console.log(`Username is ${anyObject.username} and age is ${anyObject.age}`);
}
// handleObj(user);
handleObj({
        username:"nisha",
        age:34
})

const myNewArray= [200,100,300,700]

function returnSeconfValue(getArray) {
    return getArray[2];
}
console.log(returnSeconfValue(myNewArray))
console.log(returnSeconfValue([200,100,300,700]));
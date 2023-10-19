const user ={
    username:"nisha",
    age:45,
    welcomeMessage:function () {
        console.log(`${this.username},welcome to website`);
        console.log(this);
    }
}
// user.welcomeMessage()
// user.username ="monal"
// user.welcomeMessage()

// console.log(this);

// function one() {
//     console.log(this);    
// }
// one()

// function one() {
//     let username ="hitesh"
//     console.log(this.username);    
// }
// one() //undefined

// const one = function() {
//     let username ="nisha"
//     console.log(this.username);   
// }
// one() //undefined

// const one =()=> {
//         let username ="nisha"
//         console.log(this);   
// }
// one() //{}

//pure arrow function
const addTwo =(num1,num2)=>{
    return num1+num2;
}
console.log(addTwo(2,4));

// const add = (num1,num2)=> num1+num2;
// console.log(add(9,1));


const add = (num1,num2)=> (num1+num2);


const addT = (num1,num2)=>({username:"hitesh"});
console.log(addT(2,1));

const myArray =[2,3,4,5,5];
myArray.forEach()
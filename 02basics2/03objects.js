// object literals
const mysym = Symbol("key1")
const JsUser ={
    name:"hitesh",
    "full-name":"mehta",
    [mysym]:"mykey1",
    age:18,
    location:"jaipur",
    email:"nisha@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["monday","tuesday","wednesday"]
}

// console.log(JsUser.age);
// console.log(JsUser["email"]);
// console.log(JsUser["full-name"]);
// console.log(JsUser[mysym]);

JsUser.email="njkshd2gmail.com"
console.log(JsUser['email']);
// Object.freeze(JsUser)
JsUser.email="nasa@gmail.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello js user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
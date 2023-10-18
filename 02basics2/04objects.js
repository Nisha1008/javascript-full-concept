//singleton
const tinderUser = new Object()
// console.log(tinderUser);//{}

tinderUser.id = "213dd"
tinderUser.name ="nisha"
tinderUser.isLoggedIn = true
// console.log(tinderUser);

const regularUser ={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"nisha",
            lastname:"rani"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);

const obj1 ={
    1:'a',
    2:'b'
}
const obj2 ={
    3:'c',
    4:'d'
}
const obj4 ={
    7:'c',
    5:'d'
}

// const obj3 = {obj1,obj2};
// const obj3 = Object.assign({},obj1,obj2,obj4); //merge two objects in one
const obj3 = {...obj1,...obj2,...obj4}
console.log(obj3);

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(Object.hasOwnProperty('isLoggedIn'));

const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"histesh"
}
//course.cousername

const {courseInstructor:instructor} = course //object distructure
// console.log(courseInstructor);
console.log(instructor);
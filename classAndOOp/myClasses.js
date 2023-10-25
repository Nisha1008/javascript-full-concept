// class User {
//     constructor(username,email,password){
//         this.username= username;
//         this.email=email,
//         this.password=password
//     }
//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUserName(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const newVAl = new User("nisha","abc@gmail.com","123")
// console.log(newVAl.encryptPassword());
// console.log(newVAl.changeUserName());



// behind the scene

function User(username,email,password){
    this.username= username;
    this.email= email;
    this.password=password
}

User.prototype.encrptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username}`
}
const tea = new User("nsiah","Abha,mh,",9978)

console.log(tea.encrptPassword());
console.log(tea.changeUsername());
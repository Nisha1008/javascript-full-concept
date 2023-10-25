function SetUserName(Username){
    this.Username = Username
    console.log("called");
}
function createUser(username,email,password){
    SetUserName.call(this,username)

    this.email=email,
    this.password=password
}

const chai = new createUser("nisha","abs@gmail.com",12344)
console.log(chai);
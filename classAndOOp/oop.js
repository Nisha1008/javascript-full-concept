const user ={
    username:"nisha",
    loginCount :8,
    signedIn :true,
    getUserDetails:function(){
        console.log(`got ${this.username} details from database`);
        console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

function User(username,loginCount,isLoggedIn){
    this.username = username,
    this.loginCount=loginCount,
    this.isLoggedIn=isLoggedIn
    this.greetings = function(){
        console.log(`welcome ${this.username} to this function`);
    }
    return this
}

const userOne= new User("nisha",1,true,greetings())
// const userTwo =new User("monal",12,false)
console.log(userOne);
// console.log(userTwo);
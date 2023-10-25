class User{
    constructor(username)
    {
    this.username=username
    }
    logMe(){
        console.log(`user is ${username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email=email,
        this.password=password
    }
    addCourse(){
        console.log(`this caousre was added by ${this.username}`);
    }
}

const user1 = new Teacher("nisha","naishsh@gmail,com",85646)
user1.addCourse()
console.log(user1);
const usersecond = new User("nisah")
// usersecond.addCourse()
// usersecond.logMe()
// console.log(usersecond);
// const user2 = new Teacher("mamata","mamata@gmailc.pm",76537)
// user2.logMe()
// console.log(user2);
class User{
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`Username : ${this.username}`);
    }

    static createId(){
        return `123`
    }
}
const nisha = new User("nsiah")
// console.log(nisha.createId());


class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email
    }
}

const phone = new Teacher("phine","3576325")
console.log(phone.createId);
console.log(phone);
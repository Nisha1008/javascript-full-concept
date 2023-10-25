function multipleBy5(num){
    return num*5
}
multipleBy5.power =2
console.log(multipleBy5(2))
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

function craeteUser(username,score){
    this.username = username,
    this.score = score
    // return this
}
// const user =craeteUser("nisha",99)
// console.log(user);

craeteUser.prototype.increment = function(){
    this.score++;
}
craeteUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
}
const chi = new craeteUser("nisha",23)
const tea =new craeteUser("rakan",99)
chi.printMe()
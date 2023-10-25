let myName ="nisha"
console.log(myName.length);
console.log(myName.trueLength);


let heros = ["thore","siderman"]
let heroPower = {
    thor:"hammer",
    spiderman:"sling",
    getspiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.nisha = function(){
    console.log(`nisha is present in all object`);
}
Array.prototype.sayhelo = function(){
    console.log(`nisha is my power`);
}
// heros.nisha()
// const ans =new heroPower()
// console.log(ans);
// heros.sayhelo();
// heroPower.sayhelo();


//inheritance __proto__
const User={
    name:"nisha",
    email:"nisha@gmail.com"
}
const Teacher ={
    makeVedios:true
}
const TeachingSupport={
    isAvailable :false
}
const TASupport ={
    makeAssignment :'JS Support',
    fullTime:true,
    __proto__:TeachingSupport
}
Teacher.__proto__ = User
//moern syntax
Object.setPrototypeOf(TeachingSupport,Teacher)




let antherUserName ="nsiah            "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`true length is ${this.trim().length}`);
}

antherUserName.trueLength()
"nisha".trueLength()
"iceTax".trueLength()

let a=200;
if(true){
let a=20;
const b =20; //scope wtihin curly braces
var c=30; //globally declared
// console.log("inner:",a,b);
}
// console.log(a);
// console.log(b);
// console.log(c);


function one() {
    const username="hitesh"
    function two() {
        const website= "youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}
// one()

if(true){
    const username ="nisha"
    if(username==="nisha"){
        const website= "youtube"
        // console.log(username+website);
    }
    // console.log(website);
}
// console.log(username);



/******************************** */
console.log(addOne(2))

function addOne(val) {
    return val+1
}

const addTwo = function(num) {
    return num+2;
}
console.log(addTwo(3));
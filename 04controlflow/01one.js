console.log("hello");
const temp=34;
if(temp>92){
    console.log("temperature higth");
}
else{
    console.log("nit high");
}
if(2==="2"){
console.log("executed");
}
// 3!=2
// <,> <=,>=,==,!==,===

const score=200;
if(score>40){
    let power = "fly"
    console.log(`User Power :${power}`);
}
// console.log(`User Power :${power}`);


// shorthand notaion
const bal=40;
// if(bal>23) console.log("test"),console.log("best");; //not reconmeded

if(bal<5){
    console.log("less than 5");
}
else if(bal>5){
    console.log("greater than 5");
}else{
    console.log("equaal to 5");
}


const userLoggedin = true;
const debitcredit = true;
const loggedFromGoogle = false;
const loggedFromEmail = true;
if(userLoggedin && debitcredit && 2===3){
    console.log("allow to buy course");
}
if(loggedFromEmail || loggedFromGoogle){
    console.log("allow login");
}
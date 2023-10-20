const userEmail ="bnr452425@gmail.com"

if(userEmail){
    console.log("got user email");
}
else{
    console.log("can't get");
}

//falsy value
// false,0,-0,BigInt 0n,"",null,undefined,NaN

//truthy value
// "0",'false'," ",[],{},function(){}

if (userEmail.length===0) {
    console.log("Array is Empty");
}

const emptyObj ={}
if (Object.keys(emptyObj).length===0) {
    console.log("Object is empty");
}
// false==''//true
// false==0//true
// 0=='' //true


//Nullish Coalescing Operator (??): null undefined
let val1;
val1 = undefined??15 //15
// val1 = 5??10 //5
// val1 = null ?? 10 //10
console.log(val1);

//ternary operator

const icetea =100
icetea >=90?console.log("less tha 90"): console.log("grater than  90");
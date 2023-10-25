// const descripter = Object.getOwnPropertyDescriptor(MAth,"PI")
// console.log(descripter);
// console.log(Math.PI);
// Math.PI = 8
// console.log(Math.PI);

const chai = {
    name:'ginger chai',
    price:30,
    isAvailable :true,
    orderchai:function(){
        console.log("chai is not prepare till now");
    }
}
// console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai,"name"));
Object.defineProperty(chai, 'name',{
    writable:false,
    enumerable:false
})

console.log(Object.getOwnPropertyDescriptor(chai,'name'));

for (let [key,value] of Object.entries(chai)) {
    if(typeof value !=='function'){
    console.log(`${key}:${value}`);}
}
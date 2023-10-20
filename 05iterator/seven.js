const myNumber =[1,2,3,4,5,5,6,6,7,8]

const newNums= myNumber.map((num)=>{return num+19})
// console.log(newNums);

// chaining
const news = myNumber.map((num)=>num*10).map((num)=> num+1).filter((num)=>num>=50)
console.log(news);
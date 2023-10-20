const myNums =[1,2,3]

// const myTotal= myNums.reduce(function(acc,curr){
//     console.log(`acc:${acc} and curval:${curr}`);
//     return acc+curr
// },0)
const myTotal = myNums.reduce((acc,curr)=>acc+curr,0)
console.log(myTotal);

const shopping =[
    {
        itemname:"js Course",
        price:2999
    },{
        itemname:"js",
        price:5999
    },{
        itemname:"Course",
        price:209
    },
]

const price= shopping.reduce((acc,item)=>acc+item.price,0)
console.log(price);
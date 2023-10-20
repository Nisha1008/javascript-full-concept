//for of
//["","",""]
//[{},{},{}]

const coding =["js","coding","cpp","java"]

// coding.forEach( function(item) {
//     console.log(item);
// })

// coding.forEach((item)=>{
//     console.log(item);
// })

// function printMe(item) {
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
// })

const myCoding =[
    {
        languageNAme:"javascript",
        languagefile:"ja"
    },
    {
        languageNAme:"script",
        languagefile:"python"
    },
    {
        languageNAme:"java",
        languagefile:"js"
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageNAme);
})
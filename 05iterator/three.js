//for of

const arr =[1,2,3,4,5,5]

for (const num of arr) {
    console.log(num)
}

const greeting = "helllo world"

for (const greet of greeting) {
    console.log(`character is ${greet}`);
}

//MAPS
const map= new Map()
map.set('IN',"India")
map.set('USA',"America")
map.set('Fr',"france")
map.set('IN',"India")

for (const [key,value] of map) {
    console.log(key,':-',value);
}

const myObject ={
    game1:'NFS',
    game2:'Spiderman'
}
for (const [key,value] of myObject) {
    console.log(key,':-',value);
    
}

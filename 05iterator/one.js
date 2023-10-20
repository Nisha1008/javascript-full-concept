const array = [2,3,4,90]
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element==4) {
        console.log("found number");
    }
    console.log(element);
}
// console.log(element);

for (let i = 0; i < array.length; i++) {
    console.log(`Outer loop value:${i}`);
    for (let j = 0; j < array.length; j++) {
        // console.log(`Inner lopp ${i} valie:${j}`);
        console.log(i+'*'+j+'='+i*j);
    }
}
//break and continue
const arr = [2,3,4,90]
for (let index = 0; index < arr.length; index++) {
    const element = array[index];
    if (element==4) {
        console.log("found number")
        breaak;
    }
    console.log(element);
}
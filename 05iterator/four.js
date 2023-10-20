const myObject ={
    js:'javascript',
    cpp:'c++',
    rb:'ruby',
    swift:"swift by apple"
}

for (const key in myObject) {
    console.log(`${key} is for ${myObject[key]}`);
}

const programming = ["js","cpp","c","java"]

for (const key in programming) {
    console.log(key,programming[key]);
    // console.log(programming[key]);
}
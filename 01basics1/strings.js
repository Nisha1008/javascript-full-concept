const name ="nishaa"
const repoCount = 70
console.log(`Hello my name is ${name} and repository count is ${repoCount}`);

const gameName = new String('hitesh');
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('t'));

const newStr = gameName.substring(0,6);
console.log(newStr);

const anotherStr= gameName.slice(-3,5)
console.log(anotherStr);

const newS = "          one         "
console.log(newS.trim());

const url ="https://www.google.com"
console.log(url.replace('//','**'));
console.log(url.includes('www'));

const value = "nisha-you-can-do-anything-with-your-hardwork-stay-ahead"
console.log(value.split('-'));
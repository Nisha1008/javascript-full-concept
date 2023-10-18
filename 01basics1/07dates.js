//Dates

// let mydate = new Date()
// console.log(mydate); //2023-10-18T15:51:31.779Z
// console.log(mydate.toString()); //Wed Oct 18 2023 15:51:31 GMT+0000 (Coordinated Universal Time)

// console.log(mydate.toLocaleString()) //10/18/2023, 3:53:04 PM
// console.log(typeof mydate); //object

// let mydate = new Date(2023,9,18) 
// console.log(mydate.toDateString());//Wed Oct 18 2023


// let mydate = new Date(2023,9,18,9,26)
//  console.log(mydate.toLocaleString()); //10/18/2023, 9:26:00 AM

// let mydate = new Date("2023-01-14") //yy-mm-dd
let mydate = new Date("01-14-2023") //mm-dd-yy

// console.log(mydate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(mydate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getDay());
// console.log(newDate.getMonth());0-11
newDate.toLocaleString('default',{
    weekday:"long",
    
})
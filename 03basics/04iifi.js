//imidiately invoked function expression (IIFE)

//named iifi have name
(function chai() {
    console.log("DB Connected");
})();

// semicolon is requied to stop the first funciton
// unnamed iifi
((name)=>{
    console.log(`DB COnnected TWO ${name}`);
})('nisha')
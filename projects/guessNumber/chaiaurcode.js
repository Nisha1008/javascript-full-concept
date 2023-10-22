let randomNum = parseInt(Math.random()*100+1)
const userInput = document.querySelector('#guessField')
const submit = document.querySelector('#subt')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const LoworHigh = document.querySelector('.lowOrHi')

const p = document.createElement('p')

let prevGuess =[]
let numGues =1

let playGame = true
if(playGame){
    submit.addEventListener('click',function(e) {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        valiDate(guess)
    })
}
function valiDate(guess) {
    if(isNaN(guess)){
        alert('plase enter a valid number')
    }else if(guess <1){
        alert('plase enter a number more than one') 
    }else if(guess >100){
        alert('plase enter a number less than 100')
    }else{
        prevGuess.push(guess)
        if(numGues===11){
            displayMsg(`Game Over Random number was ${randomNum}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}
function checkGuess(guess) {
    if(guess === randomNum){
        displayMsg('You Guessed Right')
        endGame()
    }else if(guess < randomNum){
        displayMsg('Number is Too low')
    }else if(guess > randomNum){
        displayMsg('Number is Too high')
    }
}
function displayGuess(guess) {
    userInput.value=''
    guessSlot.innerHTML += `${guess}  `
    numGues++
    remaining.innerHTML`${11-numGues}`
}
function displayMsg(guess) {
    LoworHigh.innerHTML =`<h2>${message}</h2>`
}
function endGame() {
    userInput.value=''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML=`<h2 id="newGame">Start a New Game</h2>`
    startOver.appendChild(p)
    playGame=false;
    newGame()
}
function newGame() {
   const myNewGame= document.querySelector('#newGame')
   myNewGame.addEventListener('click',function (e) {
    randomNum = parseInt(Math.random()*100+1)
    prevGuess[]
    numGues=1
    guessSlot.innerHTML=''
    remaining.innerHTML= `${11-numGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame=true    
   })
}
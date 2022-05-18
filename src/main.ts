import { gameData } from './gameData'
import { GameStep } from './types'
import './style.css'


const textElement = document.getElementById('title') as HTMLElement
const btnElement1 = document.querySelector(".btn-left") as HTMLElement
const btnElement2 = document.querySelector(".btn-right") as HTMLElement

const startGame = function() {
  showQuestion(currentQuestion);
}

let currentQuestion = gameData[0]

const showQuestion = function(gameStep: GameStep) {
console.log(gameStep)
  if(!gameStep) {
    gameStep = gameData[0]
  }
  textElement!.textContent = gameStep.question
  
  btnElement1!.innerHTML = gameStep.answers.left.text
  
  btnElement1.addEventListener('click',() => { 
    nextStep(currentQuestion.answers.left.navigateTo) 
    
  });
  
  btnElement2!.innerHTML = gameStep.answers.right.text


  btnElement2.addEventListener('click', () => {
  
    console.log("hhh")
    nextStep(currentQuestion.answers.right.navigateTo) 

  });
}

const nextStep = function(id: number) {

  for (let i = 0; i < gameData.length; i++) {
    const nextGame = gameData[i];
     if(nextGame.id == id ) {
       console.log(nextGame)
       showQuestion(nextGame)
     }
  }
  console.log(id);
}


window.addEventListener('load', startGame)

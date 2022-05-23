import { gameData } from './gameData'
import { GameStep } from './types'
import './style.css'


const textElement = document.getElementById('title') as HTMLElement
let btnElement1 = document.querySelector(".btn-left") as HTMLElement
let btnElement2 = document.querySelector(".btn-right") as HTMLElement

const startGame = function() {
  showQuestion(currentQuestion);
}

let currentQuestion = gameData[0]


const showQuestion = function(gameStep: GameStep) {
  if(!gameStep) {
    gameStep = gameData[0]
  }
  
  textElement.textContent = gameStep.question
  
  btnElement1.innerHTML = gameStep.answers.left.text

  let clone = btnElement1.cloneNode(true) as HTMLElement

  btnElement1.parentNode?.replaceChild(clone, btnElement1)

  btnElement1 = clone
  
  btnElement1.addEventListener('click',() => { 
    nextStep(gameStep.answers.left.navigateTo) 
    
  });
  
  btnElement2.innerHTML = gameStep.answers.right.text


  btnElement2.addEventListener('click', () => {
  
    nextStep(gameStep.answers.right.navigateTo) 

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
}


window.addEventListener('load', startGame)

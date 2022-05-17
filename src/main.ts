import { gameData } from './gameData'
import { GameStep } from './types'
import './style.css'


const textElement = document.getElementById('title') as HTMLElement
const btnElement1 = document.querySelector(".btn-left") as HTMLElement
const btnElement2 = document.querySelector(".btn-right") as HTMLElement

const startGame = function() {
  showQuestion(gameData);
}

let currentQuestion = gameData[0]

const showQuestion = function(gameData: GameStep[]) {

  textElement.textContent = currentQuestion.question

}
const nextStep = function() {
  
}

btnElement1.addEventListener('click', function() {
  
});

btnElement2.addEventListener('click', function() {

  console.log('Clicked!');
  
});

window.addEventListener('load', startGame)

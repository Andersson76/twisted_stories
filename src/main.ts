//import { gameData } from './gameData'
import { currentQuestion, showQuestion } from './gameLogicFunctions'
import './style.css'




const startGame = function() {
  showQuestion(currentQuestion);
}




window.addEventListener('load', startGame)

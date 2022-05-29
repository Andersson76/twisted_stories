import { GameStep } from "./types";
import { gameData } from "./gameData";

//export let currentQuestion: GameStep

const textElement = document.getElementById('title') as HTMLElement
let btnElementLeft = document.querySelector(".btn-left") as HTMLElement
let btnElementRight = document.querySelector(".btn-right") as HTMLElement

export let currentQuestion = gameData[0]


export const showQuestion = function(gameStep: GameStep) {
  if(!gameStep) {
    gameStep = gameData[0]
  }
  
  textElement.textContent = gameStep.question
  
  btnElementLeft.innerHTML = gameStep.answers.left.text

  let cloneLeft = btnElementLeft.cloneNode(true) as HTMLElement

  btnElementLeft.parentNode?.replaceChild(cloneLeft, btnElementLeft)

  btnElementLeft = cloneLeft
  
  btnElementLeft.addEventListener('click',() => { 

    nextStep(gameStep.answers.left.navigateTo) 
    
  });
  
  btnElementRight.innerHTML = gameStep.answers.right.text

  //Variabeln cloneRight blir en klon av btnElementRight genom metoden cloneNode (deep = och dess ättlingar) och (as) noden som ett html element.
  let cloneRight = btnElementRight.cloneNode(true) as HTMLElement

  //Från btnElementRight parentNode byts children ut till (cloneRight) från (btnElementLeft)
  btnElementRight.parentNode?.replaceChild(cloneRight, btnElementRight)

  //Variabeln btnElementRight är lika med klonen cloneRight
  btnElementRight = cloneRight


  btnElementRight.addEventListener('click', () => {
  
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
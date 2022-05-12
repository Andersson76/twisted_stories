import { GameStep } from "./types";

export const gameData: GameStep [] = [
    {
     id: 1,
     question: "Är du en bra kompis?",
     answers: {
         left: "Ja, det är jag!",
         right: "Nej, det är jag inte!"
    }
    },
    {
    id: 2,
    question: "Ok! Ni flyger tillsammans i rymden när din kompis rymdraket börjar krångla och han börjar åka i rasande fart mot solen. hjälper du honom genom att åka med i din raket?",
    answers: {
        left: "Ja, det gör jag!",
        right: "Nej, det gör jag inte!"
    }
    },
    {
    id: 3,
    question: "Ok! Ni flyger nu tillsammans tillbaka mot jorden då motorn börjar låta konstigt och ni inser att en av er måste hoppa av för att rädda den andra. Hoppar du av eller sparkar du ut din kompis?",
    answers: {
        left: "Absolut, jag hoppar av och räddar min kompis!",
        right: "Absolut, jag sparkar ut min kompis och räddar mig själv!"
    }
    },
    {
    id: 4,
    question: "Ok, det var klantigt! Då ni nu förstår att ni hade klarat er till jorden även om motorn harklade sig lite grann. Väljer du att ångra ditt tidigare val av hela dit hjärta och får det tidigare valet korrigerat?",
    answers: {
        left: "Ok, då gör jag det!",
        right: "Nej! Det gör jag inte!"
    }
    },
    {
    id: 5,
    question: "Ok, nu är ni på väg tillbaka till jorden. Väljer du att sjunga Bob Marleys låt 'No woman no cry' tillsamans med din kompis innan ni landar på Grönland?",
    answers: {
        left: "Självklart! Vilken trevlig avslutning på vår rymdresa!",
        right: "Skulle aldrig komma på fråga, jag dör hellre själv ute i rymden!"
    }
    }
]
import { GameStep } from "./types";

export const gameData: GameStep [] = [
    {
     id: 1,
     question: "Är du en bra kompis?",
     answers: [{
         text: "Ja, det är jag!",
         navigateTo: 2
    }]
    },
    {
    id: 2,
    question: "Ok! Ni flyger tillsammans i rymden när din kompis rymdraket börjar krångla och han börjar åka i rasande fart mot solen. Hjälper du honom genom att låta han åka med i din raket?",
    answers: [
        {
            text: "Ja, det gör jag!",
            navigateTo: 3
        },
        {
            text: "Nej, det gör jag inte",
            navigateTo:  7
        }
    ]
    },
    {
    id: 3,
    question: "Ok! Ni flyger nu tillsammans tillbaka mot jorden då motorn börjar låta konstigt och ni inser att en av er måste hoppa av för att rädda den andra. Hoppar du av eller sparkar du ut din kompis?",
    answers: [{
        text: "Absolut, jag hoppar av och räddar min kompis!",
        navigateTo: 4
        },
        {
        text: "Jag sparkar ut han!",
        navigateTo: 7
        }
    ]
    },
    {
    id: 4,
    question: "Ok, det var klantigt! Då ni nu förstår att ni hade klarat er till jorden även om motorn harklade sig lite grann. Väljer du att ångra ditt tidigare val av hela dit hjärta och får det tidigare valet korrigerat?",
    answers: [{
        text: "Ok, då gör jag det!",
        navigateTo: 5
        },
        {
        text: "Absolut inte!",
        navigateTo: 7      
        }]
    },
    {
    id: 5,
    question: "Ok, nu är ni på väg tillbaka till jorden. Väljer du att sjunga Bob Marleys låt 'No woman no cry' tillsamans med din kompis innan ni landar på Grönland?",
    answers: [{
        text: "Självklart! Vilken trevlig avslutning på vår rymdresa!",
        navigateTo: 7
    },
    {
        text: "Skulle aldrig komma på fråga, jag dör hellre själv ute i rymden!",
        navigateTo: 7
    }]
},
{
    id: 6,
    question: "Ok, du dödades i en Big Bang!",
    answers: [{
        text: "Börja om spelet?",
        navigateTo: 1
    }]
},
{
    id: 7,
    question: "Ok, du dödades i en Big Bang!",
    answers: [{
        text: "Börja om spelet?",
        navigateTo: 1
    }]
}
]

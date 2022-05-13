export interface GameStep {
    id: number, 
    question: string,
    answers: ButtonData[]
}

export interface ButtonData {
    text: string,
    navigateTo?: number
}

/*let GameStep: GameStep [] = [
    {}
]*/


export interface GameStep {
    id: number, 
    question: string,
    answers: {
        left: {
            text: string,
            navigateTo: number
        }
        right: {
            text: string,
            navigateTo: number
        }
    }
}



/*
export interface ButtonData {
    text: string,
    navigateTo?: number
}
*/
/*let GameStep: GameStep [] = [
    {}
]*/


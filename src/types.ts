export interface GameStep {
    id: number, 
    question: string,
    answers: {
        left: string,
        right: string
    }
}
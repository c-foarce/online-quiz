import quizAnswers from '../data/answers.json'

function buildQuestion() {

    const { answers } = quizAnswers;

    //selecting a random answer from the dataset, might need more nesting once other "answer.type"s are implemented
    const correctAnswer = answers[0/*Math.floor(Math.random() * answers.length)*/];

    //Filters out non-matching type items in the list. As of 4/5/26, only "dungeon" type is in the list

    const answerPool = answers.filter(item => item.type === correctAnswer.type)


    // const answerPoolUnique = answerPool.filter(item =>
    //     item.label !== correctAnswer.label &&
    //     item.game !== correctAnswer.game
    // );

    const rand = Math.random() < 0.5 ? 0 : 1;
    //FILTERING, this is going to be based on the type of question

    //Random chance of:
    // A "which dungeon is from GAME", answers will be DUNGEON
    // B "which game contains DUNGEON", answers will be GAME

    //in case of A, we want each answer to be a unique dungeon, so when assigning the
    //three incorrect answers, the process is:
    //SELECT - CHECK LABEL != CORRECTANSWER.LABEL, IF YES REPEAT, ELSE ADD, ITERATE 

    //in case of B, we want each answer to be a unique game, so when assinging the
    //three incorrect answers, the process is:
    //SELECT - CHECK GAME != CORRECTANSWER.GAME, IF YES REPEAT, ELSE ADD, ITERATE 
    let filteredPool = [];
    switch (rand) {
        case 0: {
            console.log("What DUNGEON is in game?");
            filteredPool = answerPool.filter(item => item.label != correctAnswer.label)
            console.log('Correct:', correctAnswer.label)
            console.log('Filtered Pool:', filteredPool)
            break;
        }

        case 1: {
            console.log("What GAME contains dungeon?");
            filteredPool = answerPool.filter(item => (item.game != correctAnswer.game)) //this also need to remove games that have versions of the dungeon in
            console.log('Correct:', correctAnswer.game)
            console.log('Filtered Pool:', filteredPool)
            break;
        }
        default:
            console.log("error")
            throw new Error("Invalid rand value");
            return;
    }

}

export default buildQuestion
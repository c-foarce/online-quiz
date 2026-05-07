import quizAnswers from '../data/answers.json'

function buildQuestion() {


    const { answers } = quizAnswers;

    //selecting a random answer from the dataset, might need more nesting once other "answer.type"s are implemented

    // const correctAnswer = answers[Math.floor(Math.random() * answers.length)];
    const correctAnswer = answers[29];

    //Filters out non-matching type items in the list. As of 4/5/26, only "dungeon" type is in the list

    const answerPool = answers.filter(item => item.type === correctAnswer.type)

    const rand = Math.random() < 0.5 ? 0 : 1;
    //FILTERING, this is going to be based on the type of question

    //Random chance of:

    // A "What DUNGEON is in game?", answers will be DUNGEON
    // B "What GAME contains dungeon?", answers will be GAME

    //in case of A, we want each answer to be a unique game, so when assinging the
    //three incorrect answers, the process is:
    //SELECT - CHECK GAME != CORRECTANSWER.GAME, IF YES REPEAT, ELSE ADD, ITERATE

    //in case of B, we want each answer to be a unique dungeon, so when assigning the
    //three incorrect answers, the process is:
    //SELECT - CHECK LABEL != CORRECTANSWER.LABEL, IF YES REPEAT, ELSE ADD, ITERATE 

    let filteredPool = [];


    const gamesToRemove = new Set(
        answerPool
            .filter(i => i.label === correctAnswer.label) //pings for any entry in the array that has the same .label as correctAnswer
            .map(i => i.game) //takes just the .game value to add to the Set

    )

    //This takes the correctAnswer label, gets any value that is in the .game key that has a .label that matches correctAnswer, the uses .map() to just get the .game value and put into a set
    //This set will then be used to filter the whole answers array to remove answers that could confuse
    //This solves point B


    const labelsToRemove = new Set(
        answerPool
            .filter(i => i.game === correctAnswer.game)
            .map(i => i.label)
    )


    //  _____      _      ____    _  __
    // |_   _|    / \    / ___|  | |/ /
    //   | |     / _ \   \___ \  | ' / 
    //   | |    / ___ \   ___) | | . \ 
    //   |_|   /_/   \_\ |____/  |_|\_\
    //
    //
    //
    // FILTER OUT DUNGEONS CORRECTLY - SIMPLE LABEL THEN GAME MATCH IS NOT ENOUGH. NEED TO GO ONE STEP BEYOND AND REMOVE ENTRIES WHERE THE .LABEL IS SIMILAR TO *ANY* OF THE .LABELS IN THE CORRECTANSWER.GAME
    //EG. IF THE ANSWER IS "SPIRIT TEMPLE", THE CURRENT CODE REMOVES THAT, AND ALL OCARINA GAMES, BUT THERE ID A FIRE TEMPLE IN OOT AND ALSO ONE IN SPIRIT TRACKS. SO WE NEED TO REMOVE THOSE INSTANCES AS WELL.



    // const testSet = new Set(
    //     answerPool
    //     .filter(i=>i.label === correctAnswer.label) //similar to above, we're searching for any repeat occurences. But this time we have to use this for another purpose
    // )
    // console.log("Test Set: ", testSet)

    console.log(gamesToRemove, labelsToRemove)

    switch (rand) {
        case 0: {
            console.log(`What DUNGEON is in ${correctAnswer.game}?`);
            filteredPool = answerPool.filter(item => (item.label != correctAnswer.label) && (item.game != correctAnswer.game)) // This needs changing, this removes all correctanswer.label's similar games,but we need the other .labels simlar games removed via a set as well
            console.log('Correct:', correctAnswer.label)
            console.log('Filtered Pool:', filteredPool)
            break;
        }

        case 1: {
            console.log(`What GAME contains ${correctAnswer.label}?`);
            filteredPool = answerPool.filter(item => !gamesToRemove.has(item.game))
            console.log('Correct:', correctAnswer.game)
            console.log(gamesToRemove)
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
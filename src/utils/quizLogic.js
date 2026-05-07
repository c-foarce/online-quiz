import quizAnswers from '../data/answers.json'

function buildQuestion() {
    console.clear()

    const { answers } = quizAnswers;

    //selecting a random answer from the dataset, might need more nesting once other "answer.type"s are implemented

    const correctAnswer = answers[Math.floor(Math.random() * answers.length)];
    // const correctAnswer = answers[29];

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

    //This takes the correctAnswer.label, gets any value that is in the .game key that has a .label that matches correctAnswer, the uses .map() to just get the .game value and put into a set
    //This set will then be used to filter the whole answers array to remove answers that could confuse
    //This solves point B


    const labelsToRemove = new Set(
        answerPool
            .filter(i => i.game === correctAnswer.game)
            .map(i => i.label)
    )

    //This takes the correctAnswer.game, and builds a Set that contains all the entiries that have the same .game value as correctAnswer. To make sure we only have the .label and not the whole object, .map() is used
    //This will then be used to filter the answers array, removing all entries that could confuse the user. Removes all duplicate labels, and all entries that share .game. 


    console.log(gamesToRemove, labelsToRemove)


    const displayAns = []

    switch (rand) {
        case 0: { //ANSWERS WILL BE .LABEL
            console.log(`What DUNGEON is in ${correctAnswer.game}?`);
            console.log('Correct:', correctAnswer.label)

            filteredPool = answerPool.filter(item => (item.game != correctAnswer.game) && (!labelsToRemove.has(item.label))) // This needs changing, this removes all correctanswer.label's similar games,but we need the other .labels simlar games removed via a set as well
            // (item.label != correctAnswer.label) && --Taken from above filter conditions, removed since the Set condition also covers this, kept around in case of errors and need to default to this
            console.log('Filtered Pool:', filteredPool)

            displayAns.push(...generateDecoys(filteredPool, 3, "label").map(i => i.label), correctAnswer.label)

            console.log(displayAns)
            break;
        }

        case 1: { //ANSWERS WILL BE .GAME
            console.log(`What GAME contains ${correctAnswer.label}?`);
            console.log('Correct:', correctAnswer.game)

            filteredPool = answerPool.filter(item => !gamesToRemove.has(item.game))

            console.log('Filtered Pool:', filteredPool)

            displayAns.push(...generateDecoys(filteredPool, 3, "label").map(i => i.game), correctAnswer.game)

            console.log(displayAns)

            break;
        }
        default:
            console.log("error")
            throw new Error("Invalid rand value");
            return;
    }


    // /==================================\
    // ||                                ||
    // ||   _______        _____ _  __   ||
    // ||  |__   __|/\    / ____| |/ /   ||
    // ||     | |  /  \  | (___ | ' /    ||
    // ||     | | / /\ \  \___ \|  <     ||
    // ||     | |/ ____ \ ____) | . \    ||
    // ||     |_/_/    \_\_____/|_|\_\   ||
    // ||                                ||
    // \==================================/

    //Now the decoys are made, shuffle then transfer it to the component.
    //Then, attach each string to the buttons, pass it as objects, {text,correct}, click events dictated by correct-ness, possible change of font based on text size
    //Then run build mode, get it working online, then test on devices



    function generateDecoys(pool, count, attribute) {

        //At this point, the array has been filtered according to correctAnswer's values, so pulling the decoy answers is possible

        const decoys = [] //store of the 3 decoy answers
        const used = new Set() //record containing the "used" array attribute values so the 3 decoy answers are unique

        while (decoys.length < count) {
            const candidate = pool[
                Math.floor(Math.random() * pool.length)
            ]

            const id = candidate[attribute]
            // const id=candidate."attribute", in dont notation terms
            // bracket notation, was stuck trying to work out how to get dynamic key lookup, forgot this also works
            // used BN so that the function can be generic for either branch of the case



            if (used.has(id)) continue

            used.add(id) //if id is unique and not already used, add it to the set and then push the id to the decoys array to ship
            // console.log(candidate)
            decoys.push(candidate)

            console.log(`Decoy number ${decoys.length}: ${id}`) //for testing, logs each entry of the decoys so any errors can start to be traced

        }

        return decoys
    }
}

export default buildQuestion
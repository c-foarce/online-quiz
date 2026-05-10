//Here is where the pre-setting of the class will be organised
//If new question formats, KV pairs are added, this is where we format them for questions

const MODES = {


    //==============
    //
    //DUNGEON CONFIG
    //
    //==============

    dungeon: {

        //grabs the question text. Later versions will have various to pull from
        prompt: answer =>
            `What DUNGEON is in ${answer.game}?`,

        //determines the attribute to define as the "corerct" answer. Later revise to be more explicit
        //in this case, it's the dungeon/"label"
        correctKey: "label",

        //creates the filters/rules for what CAN'T be in the pool of decoys
        removeSet: (pool, correctAnswer) =>

            new Set(

                pool
                    .filter(i => i.game === correctAnswer.game)
                    .map(i => i.label)
            ),


        //determines whether an item is allowed to remain in the filteres answer pool
        //using the set just made
        filter: (item, correctAnswer, removeSet) =>
            item.game !== correctAnswer.game &&
            !removeSet.has(item.label)

    },


    //==============
    //
    //GAME CONFIG
    //
    //==============

    game: {

        //grabs the question text. Later versions will have various to pull from
        prompt: answer =>
            `What GAME contains ${answer.label}?`,

        // In this mode, the correct answer is the game
        correctKey: "game",

        //creates the filters/rules for what CAN'T be in the pool of decoys
        removeSet: (pool, correctAnswer) =>
            new Set(
                pool
                    .filter(i => i.label === correctAnswer.label)
                    .map(i => i.game)
            ),

        //determines whether an item is allowed to remain in the filteres answer pool
        //using the set just made
        filter: (item, correctAnswer, removeSet) =>
            !removeSet.has(item.game)
    }
}




class QuizBuilder {

    constructor(answers) {
        //import the dataset for class use
        this.answers = answers.answers ?? answers
    }

    buildQuestion(modeName) {

        //looks up the correct config mode in the above object
        const mode = MODES[modeName]


        //get a random answer from the array
        const correctAnswer = this.getCorrectAnswer()


        //filter the answer array to only entries that have the same type
        //currently, it's just dungeons but will be expanded
        const answerPool = this.answers.filter(
            item => item.type === correctAnswer.type
        )

        //use the MODE set to build the hitlist of items to remove
        const removeSet = mode.removeSet(answerPool, correctAnswer)


        //filter the answers based on the mode's filtering rules
        const filteredPool = answerPool.filter(item =>
            mode.filter(
                item,
                correctAnswer,
                removeSet
            )
        )


        //create the pool of decoys based on correctKey
        const decoys = this.generateDecoys(
            filteredPool,
            3,
            mode.correctKey
        )


        //return a full question object
        return {

            //what mode made the question
            mode: modeName,

            //get the question text
            prompt: mode.prompt(correctAnswer),

            // //pull the correct answer dynmaically
            // correctAnswer: correctAnswer[mode.correctKey],
            //REMOVED TO PUT IT IN THE OBJECT ITSELF


            //building the final answer array, the correct answer
            //and the decoys all mixed up in one array
            answers: this.shuffle([
                ...decoys.map(i => ({
                    text: i[mode.correctKey],
                    correct: false
                })),

                {
                    text: correctAnswer[mode.correctKey],
                    correct: true
                }
            ])

        }
    }

    buildQuiz(count) {
        const questions = []

        for (let i=0;i<count;i++) {

            const mode = Math.random() <0.5 ? "game":"dungeon"

            questions.push(this.buildQuestion(mode))
        }
        return questions
    }

    getCorrectAnswer() {
        return this.answers[
            Math.floor(Math.random() * this.answers.length)
        ]
    }


    generateDecoys(pool, count, attribute) {

        //if the pool isn't big enough, throw error
        if (pool.length < count) {
            throw new Error("Not enough decoys available")
        }

        //store for chosen decoys. declared const and mutated with push/append
        const decoys = []

        //track used values to exclude from new choices
        const used = new Set()


        //continue until there are enough decoys
        while (decoys.length < count) {

            //pick random entry
            const candidate =
                pool[Math.floor(Math.random() * pool.length)]

            //bracket notation for accessing non-standard attributes
            const id = candidate[attribute]

            //skip dupes
            //EG.
            //candidate["game"]
            if (used.has(id)) continue

            //if unique, now mark it as read
            used.add(id)


            //store the full object
            decoys.push(candidate)

        }

        return decoys

    }

    shuffle(array) {

        //shuffles the array so the decoys and correct answer are mixed up
        return [...array.sort(() => Math.random() - 0.5)]
    }
}

export default QuizBuilder
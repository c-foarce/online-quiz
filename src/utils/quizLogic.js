import quizAnswers from '../data/answers.json'

function buildQuestion() {

    const answers = quizAnswers;

    //selecting a random answer from the dataset, might need more nesting once other "answer.type"s are implemented
    const correctAnswer = answers[Math.floor(Math.random() * answers.length)];

    //Filters out non-matching type items in the list. As of 4/5/26, only "dungeon" type is in the list
    const answerPool = answers.filter(item => item.type === correctAnswer.type)

}
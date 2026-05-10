//style module imports
import styles from './QuizPage.module.css'
import buttonStyles from '../../styles/button.module.css'
import textStyles from '../../styles/typography.module.css'
import layoutStyles from '../../styles/cardLayout.module.css'

import clsx from "clsx" //to help with applying various modules to one element easier, clsx import

import { useState, useEffect } from 'react'

import buildQuestion from '../../utils/quizLogic'

import quizAnswers from '../../data/answers.json'
import QuizBuilder from '../../utils/QuizBuilder'

function QuizPage({ onFinish }) {


    const [currentQuestion, setCurrentQuestion] = useState(0);

    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [quiz, setQuiz] = useState([])
    const [score, setScore] = useState(0)


    const totalQuestions = quiz.length;


    useEffect(() => {
        const builder = new QuizBuilder(quizAnswers)

        const generatedQuiz = builder.buildQuiz(10)

        setQuiz(generatedQuiz)
    }, [])



    function handleNextQuestion() {

        if (!quiz.length) return;

        if (currentQuestion === totalQuestions - 1) {
            onFinish();
            return;
        }

        setCurrentQuestion(prev => prev + 1);

        setSelectedAnswer(null); //sets chosen answer to default ready for next question
        setSubmitted(false); //resets answer submission, therefore hides "next" button
    }



    // function handleSelectAnswer(index) {
    //     //if the question is already over, lock users from breaking things
    //     if (submitted) return;

    //     setSelectedAnswer(index); //stores the option the user selected
    //     setSubmitted(true); //flags "this question is over"
    // }

    function handleSelectAnswer(answer) {
        //if the question is already over, lock users from breaking things
        if (submitted) return;

        setSelectedAnswer(answer); //stores the option the user selected
        setSubmitted(true); //flags "this question is over"

        if (answer.correct) {
            setScore(prev => prev + 1); //if the user was right, incremement the counter, later used for results
        }
    }

    const question = quiz[currentQuestion]


    // //TESTING
    // console.log("generated quiz:", quiz)
    // console.log("current index:", currentQuestion)
    // console.log("current question:", question)
    // //TESTING

    if (!quiz.length || !question) {
        return <div>Loading...</div>
    }


    return (
        <>
            <div className={layoutStyles.content}>

                <h2>Question: {currentQuestion + 1}/{totalQuestions}</h2>

                <h2>{question?.prompt}</h2>

            </div>

            <div className={layoutStyles.actions}>

                <div className={styles.questionLayout}>

                    <div className={styles.answerBox}>

                        {question?.answers.map((answer, index) => (
                            // <button
                            //     key={index}
                            //     className={clsx(buttonStyles.button, buttonStyles.submitButton)}
                            //     onClick={() => handleSelectAnswer(answer)}
                            // >
                            //     {answer.text}
                            // </button>
                            <button
                                key={index}
                                className={clsx(
                                    buttonStyles.button,
                                    buttonStyles.submitButton,

                                    selectedAnswer === answer && !submitted && styles.selected,

                                    submitted && answer.correct && buttonStyles.correctAnswer,

                                    submitted && selectedAnswer === answer && !answer.correct && buttonStyles.incorrectAnswer
                                )}
                                onClick={() => handleSelectAnswer(answer)}
                            >
                                {answer.text}
                            </button>
                        ))}

                    </div>

                    {submitted && (
                        <div className={styles.proceedBox}>
                            <button
                                className={clsx(buttonStyles.button, buttonStyles.proceedButton)}
                                onClick={handleNextQuestion}>
                                Next
                            </button>
                        </div>
                    )}
                </div>

            </div>


        </>
    )
}
export default QuizPage
//style module imports
import styles from './QuizPage.module.css'
import buttonStyles from '../../styles/button.module.css'
import textStyles from '../../styles/typography.module.css'
import layoutStyles from '../../styles/cardLayout.module.css'

import clsx from "clsx" //to help with applying various modules to one element easier, clsx import

import { useState } from 'react'

function QuizPage({ onFinish }) {

    // When moving to 0-indexing, change this to:
    // const [currentQuestion, setCurrentQuestion] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(1);

    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [submitted, setSubmitted] = useState(false);

    // Currently hardcoded but will later be dynamic/mutable
    // const totalQuestions = questions.length
    const totalQuestions = 10;

    function handleNextQuestion() {

        // This logic will switch to:
        // if (currentQuestion === totalQuestions - 1) { ... }
        // when working toward a more dynamic quiz. Currently hardcoded at 10 but could change
        if (currentQuestion === totalQuestions) {
            onFinish();
            return;
        }

        setCurrentQuestion(prev => prev + 1);

        setSelectedAnswer(null); //sets chosen answer to default ready for next question
        setSubmitted(false); //resets answer submission, therefore hides "next" button
    }

    function handleSelectAnswer(index) {
        //if the question is already over, lock users from breaking things
        if (submitted) return;

        setSelectedAnswer(index); //stores the option the user selected
        setSubmitted(true); //flags "this question is over"
    }


    return (
        <>
            <div className={layoutStyles.content}>
                <h1>Placeholder text. Quiz Page</h1>


                {/*
             This will likely become: Question {currentQuestion} / {totalQuestions}
            */}
                <h2>
                    Counter: {currentQuestion}
                </h2>
                <p>These buttons will be removed later, this is currently for app navigation</p>

            </div>
            <div className={layoutStyles.actions}>
                <div className={styles.questionLayout}>

                    <div className={styles.answerBox}>

                        <button
                            className={clsx(buttonStyles.button, buttonStyles.submitButton)}
                            onClick={() => handleSelectAnswer(0)}>
                            1.
                        </button>
                        <button
                            className={clsx(buttonStyles.button, buttonStyles.submitButton)}
                            onClick={() => handleSelectAnswer(1)}>
                            2.
                        </button>
                        <button
                            className={clsx(buttonStyles.button, buttonStyles.submitButton)}
                            onClick={() => handleSelectAnswer(2)}>
                            3.
                        </button>
                        <button
                            className={clsx(buttonStyles.button, buttonStyles.submitButton)}
                            onClick={() => handleSelectAnswer(3)}>
                            4.
                        </button>

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
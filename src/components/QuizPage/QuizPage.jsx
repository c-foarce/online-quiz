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

    // Currently hardcoded but will later be dynamic/mutable
    // const totalQuestions = questions.length
    const totalQuestions = 10;


    function handleSubmitAnswer() {

        // This logic will switch to:
        // if (currentQuestion === totalQuestions - 1) { ... }
        // when working toward a more dynamic quiz. Currently hardcoded at 10 but could change
        if (currentQuestion === totalQuestions) {
            // alert("Reached 10")
            { onFinish(); }
            return;
        }


        setCurrentQuestion(prev => prev + 1);
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
                {/* <button
                    className={clsx(buttonStyles.button, buttonStyles.submitButton)}
                    onClick={handleSubmitAnswer}
                >
                    Increment counter
                </button> */}
                <div className={styles.answerBox}>

                    <button className={clsx(buttonStyles.button, buttonStyles.submitButton)}>1.</button>
                    <button className={clsx(buttonStyles.button, buttonStyles.submitButton)}>2.</button>
                    <button className={clsx(buttonStyles.button, buttonStyles.submitButton)}>3.</button>
                    <button className={clsx(buttonStyles.button, buttonStyles.submitButton)}>4.</button>

                </div>


            </div>


        </>
    )
}
export default QuizPage
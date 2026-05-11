//style module imports
import styles from './HowTo.module.css'
import buttonStyles from '../../styles/button.module.css'
import textStyles from '../../styles/typography.module.css'
import layoutStyles from '../../styles/cardLayout.module.css'


import clsx from "clsx" //to help with applying various modules to one element easier, clsx import

import { useState, useEffect } from 'react'
import buildQuestion from '../../utils/quizLogic'
import QuizBuilder from '../../utils/QuizBuilder'

import quizAnswers from '../../data/answers.json'



function HowTo({ onBack, onStart }) {

    //The below Effect is purely for some visual display of what happens during the quiz. no onClick event, just showing what does happen


    const [revealed, setRevealed] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setRevealed(prev => !prev);
        }, 2500);

        return () => clearInterval(interval);
    }, []);



    return (
        <>
            <div className={layoutStyles.content}>

                <h1 className={styles.title}>Understanding how to play this quiz</h1>

                <div className={styles.helpContainer}>

                    <div className={styles.helpDescriptor}>

                        <p>You will be asked a question, and given 4 responses.</p>
                        <p> Once you have decided and selected an answer, it is immediately locked in and your answer will be checked.</p>
                        <p> A button will appear to load the next question.</p>
                    </div>

                    <div className={styles.helpDescriptor}>

                        <h4>Example Question</h4>

                        <div className={styles.answerBox}>

                            <button
                                className={clsx(
                                    buttonStyles.button,
                                    buttonStyles.exampleButton,
                                    revealed && buttonStyles.correctAnswer
                                )}
                            >
                                {revealed ? "Correct Answer" : "Answer"}
                            </button>

                            <button
                                className={clsx(
                                    buttonStyles.button,
                                    buttonStyles.exampleButton
                                )}
                            >
                                Answer
                            </button>

                            <button
                                className={clsx(
                                    buttonStyles.button,
                                    buttonStyles.exampleButton
                                )}
                            >
                                Answer
                            </button>

                            <button
                                className={clsx(
                                    buttonStyles.button,
                                    buttonStyles.exampleButton,
                                    revealed && buttonStyles.incorrectAnswer
                                )}
                            >
                                {revealed ? "Incorrect Answer" : "Answer"}
                            </button>

                        </div>

                        <div className={styles.proceedBox}>
                            {revealed && (
                                <button
                                    className={clsx(
                                        buttonStyles.button,
                                        buttonStyles.exampleButton,
                                        buttonStyles.proceedButton
                                    )}
                                >Next</button>
                            )}
                        </div>

                    </div>
                </div>

            </div>

            <div className={layoutStyles.actions}>
                <button
                    className={clsx(buttonStyles.button, buttonStyles.startButton)}
                    onClick={onStart}
                >
                    Start Quiz
                </button>
                <button
                    className={clsx(buttonStyles.button, buttonStyles.backButton)}
                    onClick={onBack}
                >
                    Return
                </button>


            </div>
        </>
    )

}
export default HowTo
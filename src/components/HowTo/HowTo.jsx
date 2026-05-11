//style module imports
import styles from './HowTo.module.css'
import buttonStyles from '../../styles/button.module.css'
import textStyles from '../../styles/typography.module.css'
import layoutStyles from '../../styles/cardLayout.module.css'


import clsx from "clsx" //to help with applying various modules to one element easier, clsx import

import { useState } from 'react'
import buildQuestion from '../../utils/quizLogic'
import QuizBuilder from '../../utils/QuizBuilder'

import quizAnswers from '../../data/answers.json'



function HowTo({ onBack, onStart }) {

    const handleTestClick = () => {
        const builder = new QuizBuilder(quizAnswers)

        const mode = Math.random() < 0.5 ? "game" : "dungeon"

        const result = builder.buildQuestion(mode)

        console.log(result)
    }


    return (
        <>
            <div className={layoutStyles.content}>

                <h1 className={styles.title}>Understanding how to play this quiz</h1>

                <div className={styles.helpContainer}>

                    <div className={styles.helpDescriptor}>

                        <h1>TEST</h1>

                    </div>

                    <div className={styles.helpDescriptor}>

                        <h1>YEST</h1>

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
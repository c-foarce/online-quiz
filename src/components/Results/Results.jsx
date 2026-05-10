//style module imports
import styles from './Results.module.css'
import buttonStyles from '../../styles/button.module.css'
import textStyles from '../../styles/typography.module.css'
import layoutStyles from '../../styles/cardLayout.module.css'


import clsx from "clsx"

function Results({ onReturn, results }) {

    if (!results) {
        return <>
            <div className={layoutStyles.content}>
                <h1>No Results Available</h1>
            </div>
            <div className={layoutStyles.actions}>
                <button
                    className={clsx(buttonStyles.button, buttonStyles.backButton)}
                    onClick={onReturn}
                >
                    Return to Main Menu
                </button>
            </div>
        </>

    }
    return (
        <>
            <div className={layoutStyles.content}>

                <h1>Results: {results.score}/{results.total}</h1>
                {/* <h4>{results.score}/{results.total}</h4> */}

                {/* <p>{results.answersLog}</p> */}
                <div className={styles.records}>{results.answersLog.map((entry, index) => (
                    <div className={styles.recordBlock} key={index}>
                        <p>Question {index + 1}: {entry.question}</p>
                        {entry.isCorrect ? (
                            <>
                                <p>You selected: {entry.selected}</p>
                                <p className={styles.userCorrect}>Correct</p>
                            </>
                        ) : (
                            <>
                                <p >You selected: <span className={styles.userWrong}>{entry.selected}</span></p>
                                <p >The correct answer was: <span className={styles.userCorrect}>{entry.correct}</span></p>
                            </>
                        )}
                    </div>
                ))}
                </div>



            </div>
            <div className={layoutStyles.actions}>
                <button
                    className={clsx(buttonStyles.button, buttonStyles.backButton)}
                    onClick={onReturn}
                >
                    Return to Main Menu
                </button>
            </div>
        </>
    )
}
export default Results
//style module imports
import styles from './HowTo.module.css'
import buttonStyles from '../../styles/button.module.css'
import textStyles from '../../styles/typography.module.css'

import clsx from "clsx"


function HowTo({ onBack, onStart }) {
    return (
        <>
            <h1 className={styles.title}>This is placeholder text, expand later</h1>
            <p>------</p>
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
        </>
    )

}
export default HowTo
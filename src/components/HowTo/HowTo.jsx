//style module imports
import styles from './HowTo.module.css'
import buttonStyles from '../../styles/button.module.css'
import textStyles from '../../styles/typography.module.css'
import layoutStyles from '../../styles/cardLayout.module.css'


import clsx from "clsx"


function HowTo({ onBack, onStart }) {
    return (
        <>
            <div className={layoutStyles.content}>

                <h1 className={styles.title}>This is placeholder text, expand later</h1>
                <p>------</p>
    

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
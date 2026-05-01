//importing styles from module sheets and from a central styling directory
import buttonStyles from '../../styles/button.module.css'
import textStyles from '../../styles/typography.module.css'
import layoutStyles from '../../styles/cardLayout.module.css'
import styles from './Welcome.module.css'

//to help with applying various modules to one element easier, clsx import
import clsx from "clsx"

function Welcome({ onStart, onHowTo }) {
    return (
        <>
            <div className={layoutStyles.content}>
                <h1 className={textStyles.title}>Welcome to my Zelda Quiz! Please choose an option:</h1>
            </div>
            
            <div className={layoutStyles.actions}>
                <button
                    className={clsx(buttonStyles.button, buttonStyles.startButton)}
                    onClick={onStart}
                >
                    Start Quiz
                </button>
                <button
                    className={clsx(buttonStyles.button, buttonStyles.helpButton)}
                    onClick={onHowTo}
                >
                    Help
                </button>
            </div>
        </>
    )
}
export default Welcome
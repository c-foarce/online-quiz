//style module imports
import styles from './QuizPage.module.css'
import buttonStyles from '../../styles/button.module.css'
import textStyles from '../../styles/typography.module.css'

import clsx from "clsx"

function QuizPage({ onFinish }) {
    return (
        <>
            <h1>Placeholder text. Quiz Page</h1>

            <p>This button will be removed later, this is currently for app navigation</p>
            
            <button
                className={clsx(buttonStyles.button, buttonStyles.resultsButton)}
                onClick={onFinish}
            >
                Go to Results
            </button>
        </>
    )
}
export default QuizPage
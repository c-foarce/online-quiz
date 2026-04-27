//style module imports
import styles from './Results.module.css'
import buttonStyles from '../../styles/button.module.css'
import textStyles from '../../styles/typography.module.css'

import clsx from "clsx"

function Results({ onReturn }) {
    return (
        <>
            <h1>Placeholder text, will replace</h1>

            <h3>Results:</h3>
            <h4>?/10</h4>

            <button
                className={clsx(buttonStyles.button, buttonStyles.backButton)}
                onClick={onReturn}
            >
                Return to Main Menu
            </button>
        </>
    )
}
export default Results
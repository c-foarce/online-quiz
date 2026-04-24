//importing styles from module sheets and from a central styling directory
import buttonStyles from '../../styles/button.module.css'
import textStyles from '../../styles/typography.module.css'
import styles from './Welcome.module.css'

//to help with applying various modules to one element easier, clsx import
import clsx from "clsx"

function Welcome() {
    return (
        <>
            <h1 className={textStyles.title}>Welcome to my Zelda Quiz! Please choose an option:</h1>
            <button className={clsx(buttonStyles.button, buttonStyles.startButton)} onClick={() => alert("Hello")}>Test 1</button>
            <button className={clsx(buttonStyles.button, buttonStyles.helpButton)}>Test 2</button>
        </>
    )
}
export default Welcome
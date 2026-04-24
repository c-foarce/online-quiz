
import buttonStyles from '../../styles/button.module.css'
import textStyles from '../../styles/typography.module.css'
import styles from './Welcome.module.css'

function Welcome () {
    return (
        <>
        <h1 className={textStyles.title}>Welcome to my Zelda Quiz! Please choose an option:</h1>   
        <button className ={buttonStyles.startButton} onClick = {()=> alert("Hello")}>Test 1</button>
        <button>Test 2</button>
             </>
    )
}
export default Welcome
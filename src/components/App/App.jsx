import { useState } from 'react'

//Importing components that App will use as the highest level component
import Layout from '../Layout/Layout'

import Welcome from '../Welcome/Welcome'
import QuizPage from '../QuizPage/QuizPage'
import HowTo from '../HowTo/HowTo'
import Results from '../Results/Results'

//importing styling modules
import styles from './App.module.css'

//background image import
import imageBackground from '../../assets/images/zelda-quiz-bg.jpg'


function App() {
  const [screen, setScreen] = useState('welcome')

  //function that sets the screen to be displayed inside the central box
  function goTo(newScreen) {
    setScreen(newScreen);
  }

  return (
    <>
      <div className={styles.app}>

        <div
          className={styles.background}
          style={{ backgroundImage: `url(${imageBackground})` }}
        />

        <div className={styles.overlay}>

          <Layout>
            {screen === "welcome" && (<Welcome />)}
            {screen === "quiz" && (<QuizPage />)}
            {screen === "howto" && (<HowTo />)}
            {screen === "results" && (<Results />)}

          </Layout>



        </div>
      </div>
    </>
  );
}

export default App

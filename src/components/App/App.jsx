import { useState } from 'react'
import './App.css'
import Welcome from '../Welcome/Welcome'
import styles from './App.module.css'
import imageBackground from '../../assets/images/zelda-quiz-bg.jpg'


function App() {
  return (
    <div className={styles.app}>

      <div
        className={styles.background}
        style={{ backgroundImage: `url(${imageBackground})` }}
      />
      <div className={styles.overlay} />

      <div className={styles.wrapper}>
        <h1 className={styles.pageTitle}>Testing Text outside the main box layer</h1>

        <div className={styles.container}>
          <h1>Title</h1>
          <Welcome />
        </div>
      </div>

    </div>
  );
}

export default App

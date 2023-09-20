
import styles from "./hero.module.css"
import "../../../src/styles.css"
import Navbar from "../navbar/Navbar"
const Hero = () => {
  return (
    <div className={styles.background}>
      <Navbar/>
      <div className={styles.headHero}>
        <h1>Meet Destiny, the visionary landing Page.</h1>
      <p>Re-targeting your audience with competitive intelligence embedded in Destiny. See it in action and then believe.</p>
      </div></div>
  )
}

export default Hero
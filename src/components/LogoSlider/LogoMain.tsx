import styles from "./logoMain.module.css"

const LogoMain = () => {
  return (
    <div className={styles.logoMainSection}>
    <div className={styles.marqueeContainer}>
      <div className={styles.logo}>
        <img src="public\logo1.png" alt="" />
      </div>
      <div className={styles.logo}>
        <img src="public\logo2.png" alt="" />
      </div>
      <div className={styles.logo}>
        <img src="public\logo3.png" alt="" />
      </div>
      <div className={styles.logo}>
        <img src="public\logo4.png" alt="" />
      </div>
      <div className={styles.logo}>
        <img src="public\logo6.png" alt="" />
      </div>
      <div className={styles.logo}>
        <img src="public\logo7.png" alt="" />
      </div>
    </div>
  </div>
  )
}

export default LogoMain
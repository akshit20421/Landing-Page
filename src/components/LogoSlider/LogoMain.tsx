import styles from "./logoMain.module.css"

const LogoMain = () => {
  return (
    <div className={styles.logoMainSection}>
    <div className={styles.marqueeContainer}>
      <div className={styles.logo}>
        <img src="logo1.png" alt="" />
      </div>
      <div className={styles.logo}>
        <img src="logo2.png" alt="" />
      </div>
      <div className={styles.logo}>
        <img src="logo3.png" alt="" />
      </div>
      <div className={styles.logo}>
        <img src="logo4.png" alt="" />
      </div>
      <div className={styles.logo}>
        <img src="logo6.png" alt="" />
      </div>
      <div className={styles.logo}>
        <img src="logo7.png" alt="" />
      </div>
    </div>
  </div>
  )
}

export default LogoMain
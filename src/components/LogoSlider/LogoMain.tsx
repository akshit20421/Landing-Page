import styles from "./logoMain.module.css"

const LogoMain = () => {
  return (
    <div className={styles.logoMainSection}>
    <div className={styles.marqueeContainer}>
      <div className={styles.logo}>
        <img src="/assets/logo1.png" alt="" />
      </div>
      <div className={styles.logo}>
        <img src="/assets/logo2.png" alt="" />
      </div>
      <div className={styles.logo}>
        <img src="/assets/logo3.png" alt="" />
      </div>
      <div className={styles.logo}>
        <img src="/assets/logo4.png" alt="" />
      </div>
      <div className={styles.logo}>
        <img src="/assets/logo6.png" alt="" />
      </div>
      <div className={styles.logo}>
        <img src="/assets/logo7.png" alt="" />
      </div>
    </div>
  </div>
  )
}

export default LogoMain
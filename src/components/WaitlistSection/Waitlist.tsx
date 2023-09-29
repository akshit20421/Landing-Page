import styles from "./Waitlist.module.css"

const Waitlist = () => {
  return (
    <div className={styles.waitlistMain}>
        <h1>Still confused ? Try a 7-day free trial now</h1>
        <p>Don't worry, we won't need your credit card details. Just enter your
email address and we'll take care of the rest.</p>
<form action="">
    <input type="email" name="" className={styles.mail} placeholder="Join the wait list" id="" />
    <button className={styles.submitButton}>Subscribe</button>
</form>
    </div>
  )
}

export default Waitlist
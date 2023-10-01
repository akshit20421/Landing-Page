import styles from "./footer.module.css"

const FooterSection = () => {
  return (
    <div className={styles.footerMain}>
        <img src="/assets/logo.png" alt="" />
        <ul>
  <li><a href="#">HOME</a></li>
  <li><a href="#">ABOUT</a></li>
  <li><a href="#">TERMS</a></li>
  <li><a href="#">PRIVACY</a></li>
</ul>
<p>Copyright © 2023 Destiny Inc. All Rights Reserved.</p>
    </div>
  )
}

export default FooterSection
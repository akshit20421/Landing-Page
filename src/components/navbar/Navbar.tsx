import styles from "./style.module.css"

const Navbar = () => {
  return (
    <div className={styles.navbar}>
        <div className={styles.logo}>
           <img src="src\assets\logo.png" alt="" />
        </div>
        <div className={styles.selectNavbarOptions}>
              <ul>
                <a href="#"><li>Home</li></a>
                <a href="#"><li>Services</li></a>
                <a href="#"><li>Features</li></a>
                <a href="#"><li>Reviews</li></a>
                <a href="#"><li>Pricing</li></a>
                <a href="#"><li>Contact</li></a>
              </ul>
        </div>
    </div>
  );
};

export default Navbar;

import { useEffect } from "react";
import styles from "./style.module.css"
const Navbar = () => {
    useEffect(() => {
        const scrollAnimate = () => {
            const scrollY = window.scrollY;
            const navbar = document.querySelector(`.${styles.navbar}`);
            const navbarOptions = document.querySelectorAll(`.${styles.selectNavbarOptions} a`);
              
            if (scrollY > 0) {
                navbar?.classList.add(styles.navbarScroll);
                navbarOptions.forEach(option => {
                    option.classList.add(styles.listColor);
                });
               
            } else if (scrollY === 0) {
                navbar?.classList.remove(styles.navbarScroll);
                navbarOptions.forEach(option => {
                    option.classList.remove(styles.listColor);
                });
            }
        }

        window.addEventListener('scroll', scrollAnimate);

        return () => {
            window.removeEventListener('scroll', scrollAnimate);
        };
    }, []);
  return (
    <div className={styles.navbar}>
        <div className={styles.logo}>
           <img src="src/assets/logo.png" alt="" />
        </div>
        <div className={styles.selectNavbarOptions}>
              <ul>
              <li><a href="#">Home</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Features</a></li>
        <li><a href="#">Reviews</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">Contact</a></li>
              </ul>
        </div>
    </div>
  );
};

export default Navbar;

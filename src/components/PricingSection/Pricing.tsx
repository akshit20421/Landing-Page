import styles from "./pricing.module.css"
const Pricing = () => {
  return (
    <div className={styles.pricingMainSection}>
        <h1>Pickup the right pricing plan for you.</h1>
        <p>Our plans are designed to meet the requirements of both beginners
and players. Get the right plan that suits you.</p>
<div className={styles.pricingBoxes}>
    <div className={styles.pricingBox1}>
       <img src="src\assets\cart2.png" alt="" />
       <h3>Beginner Plan</h3>
       <h1>$5.90</h1>
       <p>Pay little enjoy the product for life time.</p>
        <ul>
            <li>First basic feature</li>
            <li>Second feature goes here</li>
            <li>Any other third feature</li>
            <li>Any other third feature</li>
        </ul>
        <button>GET PLAN</button>
    </div>
    <div className={styles.pricingBox2}>
        <img src="src\assets\cart1.png" alt="" />
        <h3>Premium Plan</h3>
        <h1>$19.99</h1>
        <p>Pay only for what you use. Flexible payment options.</p>
        <ul>
            <li>First premium feature</li>
            <li>Second premium one goes here</li>
            <li>Third premium feature here</li>
            <li>Final premium feature</li>
        </ul>
        <button>BUY NOW</button>
        </div>
</div>
    </div>
  )
}

export default Pricing
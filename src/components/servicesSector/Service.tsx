import styles from "./serviceStyle.module.css"

const Service = () => {
  return (
    <div className={styles.serviceSector}>
<h1>Destiny isn't A.I, its the result of human intelligence.</h1>
        <div className={styles.paraService}>  
        <p>Ne homero petentium mel, eu pro putent persecuti. Id ius mutat gubergren, eros harum hendrerit ex eos, in quo vocibus inimicus gubergren.</p>
        </div>  
        <div className={styles.serviceFeature}>
            <div className={styles.serviceF1}>
                <div className={styles.borderImgServices}>
                    <img src="icon1.png" alt="" />
               </div>
               <h2>Highly Responsive</h2>
                <p>Id ius mutat gubergren, eros harum hendrerit ex eos, in quo vocibus inimicus gubergren. Experience, then believe.</p>
            </div>
            <div className={styles.serviceF2}>
            <div className={styles.borderImgServices}>
                <img src="icon2.png" alt="" />
               </div>
               <h2>Built-in Security</h2>
               <p>Id ius mutat gubergren, eros harum hendrerit ex eos, in quo vocibus inimicus gubergren. Experience, then believe.</p>
                
            </div>
            <div className={styles.serviceF3}>
            <div className={styles.borderImgServices}>
                <img src="icon3.png" alt="" />
               </div>
               <h2>Safety Locked</h2>
               <p>Id ius mutat gubergren, eros harum hendrerit ex eos, in quo vocibus inimicus gubergren. Experience, then believe.</p>
            </div>
            
        </div>
    </div>
  )
}

export default Service
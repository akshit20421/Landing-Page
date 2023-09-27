import React, { useEffect, useState } from 'react';
import styles from "./detail.module.css"

const Detail = () => {
    
  return (
    <div className={styles.detailMain}>
        <div className={styles.downloadMain}>
    <svg height="16px" version="1.1" viewBox="0 0 24 16" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.4,6 C18.7,2.6 15.7,0 12,0 C9.1,0 6.6,1.6 5.4,4 C2.3,4.4 0,6.9 0,10 C0,13.3 2.7,16 6,16 L19,16 C21.8,16 24,13.8 24,11 C24,8.4 21.9,6.2 19.4,6 L19.4,6 Z M17,9 L12,14 L7,9 L10,9 L10,5 L14,5 L14,9 L17,9 L17,9 Z" />
    </svg>
    <h1 className={styles.changeData}>46k+</h1>
    <p>Downloads</p>
    </div>
    <div className={styles.awardsMain}>
    <svg height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <path d="M440.9,136.3a4,4,0,0,0,0-6.91L288.16,40.65a64.14,64.14,0,0,0-64.33,0L71.12,129.39a4,4,0,0,0,0,6.91L254,243.88a4,4,0,0,0,4.06,0Z" />
      <path d="M54,163.51A4,4,0,0,0,48,167V340.89a48,48,0,0,0,23.84,41.39L234,479.51a4,4,0,0,0,6-3.46V274.3a4,4,0,0,0-2-3.46Z" />
      <path d="M272,275v201a4,4,0,0,0,6,3.46l162.15-97.23A48,48,0,0,0,464,340.89V167a4,4,0,0,0-6-3.45l-184,108A4,4,0,0,0,272,275Z" />
    </svg>
    <h1 className={styles.changeData}>66</h1>
    <p>Awards</p>
    </div>
    <div className={styles.pressMain}>
    <svg height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.012 18H21V4a2 2 0 0 0-2-2H6c-1.206 0-3 .799-3 3v14c0 2.201 1.794 3 3 3h15v-2H6.012C5.55 19.988 5 19.805 5 19s.55-.988 1.012-1zM8 6h9v2H8V6z" />
    </svg>
    <h1 className={styles.changeData}>31</h1>
    <p>In-Press</p></div>
    <div className={styles.usersMain}>
  <svg enable-background="new 0 0 24 24" id="Layer_1" version="1.0" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" ><g><path d="M9,9c0-1.7,1.3-3,3-3s3,1.3,3,3c0,1.7-1.3,3-3,3S9,10.7,9,9z M12,14c-4.6,0-6,3.3-6,3.3V19h12v-1.7C18,17.3,16.6,14,12,14z   "/></g><g><g><circle cx="18.5" cy="8.5" r="2.5"/></g><g><path d="M18.5,13c-1.2,0-2.1,0.3-2.8,0.8c2.3,1.1,3.2,3,3.2,3.2l0,0.1H23v-1.3C23,15.7,21.9,13,18.5,13z"/></g></g><g><g><circle cx="18.5" cy="8.5" r="2.5"/></g><g><path d="M18.5,13c-1.2,0-2.1,0.3-2.8,0.8c2.3,1.1,3.2,3,3.2,3.2l0,0.1H23v-1.3C23,15.7,21.9,13,18.5,13z"/></g></g><g><g><circle cx="5.5" cy="8.5" r="2.5"/></g><g><path d="M5.5,13c1.2,0,2.1,0.3,2.8,0.8c-2.3,1.1-3.2,3-3.2,3.2l0,0.1H1v-1.3C1,15.7,2.1,13,5.5,13z"/></g></g></svg>
  <h1 className={styles.changeData}>43k+</h1>
    <p>Satisfied Users</p>
  </div>
  </div>
  
  )
}

export default Detail
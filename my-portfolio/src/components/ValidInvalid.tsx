import React from "react";
import styles from '@/styles/TextInputValidation.module.css'

function ValidInvalid({ isValid }) {
  return (
    <div className={styles.alertWrapper}>
      <div className={`${isValid === false ? `${styles.alertRed}` : ''} ${styles.generalAlert}`}>BAD</div>
      <div className={`${isValid === true ? `${styles.alertGreen}` : ''} ${styles.generalAlert}`}>GOOD</div>
    </div>
  )
}

export default ValidInvalid;
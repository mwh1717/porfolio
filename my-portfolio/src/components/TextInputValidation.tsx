import React from "react";
import { useState } from "react";
import ValidInvalid from "./ValidInvalid";
import styles from "@/styles/TextInputValidation.module.css"

function TextInputValidation() {
  const [validState, setValidState] = useState(false);

  const handleChange = (e) => {
    if (e.target.value === "helloWorld") {
      setValidState(true);
    } else {
      setValidState(false);
    }
  }

  return (
    <div className={styles.body}>
      <div className={styles.validationInstruction}>Please enter "helloWorld" into the input</div>
      <div className={styles.inputWrapper}>
        <input
          type="text"
          className={styles.input}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className={styles.alertWrapper}>
        <ValidInvalid isValid={validState} />
      </div>
    </div>
  )
}

export default TextInputValidation;
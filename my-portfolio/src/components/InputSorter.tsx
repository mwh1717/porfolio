import React from "react";
import { useState, ChangeEvent, KeyboardEvent } from "react";
import styles from '@/styles/InputSorter.module.css'

function InputSorter() {
  const emptyState = ['', '', '', '', ''];
  const [inputValues, setInputValues] = useState(emptyState);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    const newInputValues = [...inputValues];

    if (/^[1-9]$/.test(value)) {
      newInputValues[index] = value;
      setInputValues(newInputValues);
    }
  }

  const handleBackspace = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    const newInputValues = [...inputValues]
    
    if (e.keyCode === 8) {
      newInputValues[index] = '';
      setInputValues(newInputValues);
    }
  }

  const setInputsIntoDiv = (array) => {
    const theDiv = document.querySelector('.dumpOut');

    array.forEach((number) => {
      const newDiv = document.createElement('div');
      newDiv.classList.add('dumpDiv');
      newDiv.innerText = number;
      theDiv?.appendChild(newDiv);
    })
  }

  const destroyDump = () => {
    const dumpedDiv = document.querySelector('.dumpOut');
    while (dumpedDiv.firstChild) {
      dumpedDiv.removeChild(dumpedDiv.firstChild);
    }
  }

  const handleAscendingSort = () => {
    const sortedNumbers: string[] = [...inputValues].sort((a: string, b: string) => Number(a) - Number(b));
    destroyDump();
    setInputsIntoDiv(sortedNumbers);
  }

  const handleDescendingSort = () => {
    const sortedNumbers: string[] = [...inputValues].sort((a: string, b: string) => Number(b) - Number(a));
    destroyDump();
    setInputsIntoDiv(sortedNumbers);
  }

  const handleRandomSort = () => {
    const randomNumbers = [...inputValues].sort(() => Math.random() - 0.5);
    destroyDump();
    setInputsIntoDiv(randomNumbers);
  }

  const handleClear = () => {
    setInputValues(emptyState);
    destroyDump();
  }

  return (
    <div className={styles.module}>
      <div className={styles.sorterInstruction}>Input numbers between 1 - 9, press a button to sort</div>
      <div className={`${styles.inputWrapper} ${styles.contentWrapper}`}>
        {[...Array(5)].map((_, index) => (
          <input
            key={index}
            type="text"
            min="1"
            max="9"
            value={inputValues[index]}
            onChange={(e) => handleInputChange(e, index)}
            onKeyDown={(e) => handleBackspace(e, index)}
            className={styles.input}
          >
          </input>
        ))}
      </div>
      <div className={`${styles.buttonWrapper} ${styles.contentWrapper}`}>
        <button className={styles.button} onClick={handleAscendingSort}>Ascending</button>
        <button className={styles.button} onClick={handleDescendingSort}>Descending</button>
        <button className={styles.button} onClick={handleRandomSort}>Random</button>
        <button className={styles.button} onClick={handleClear}>Clear</button>
      </div>
      <div className={`${styles.dumpOut} dumpOut`}></div>
    </div>
  )
}

export default InputSorter;
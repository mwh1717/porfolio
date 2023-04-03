import React from "react";
import data from "../../public/story.json";
import styles from '@/styles/Story.module.css';

function StoryBlock() {

  return (
    <div className={styles.body}>
      <div className={styles.paragraphWrapper}>
        {data.map((data, index) => (
          <p key={index} className={styles.contentBlock}> {data.para} </p>
        ))}
      </div>
    </div>
  )
}

export default StoryBlock;
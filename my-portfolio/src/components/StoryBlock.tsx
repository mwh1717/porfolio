import React from "react";
import data from "../../public/story.json";
import styles from '@/styles/Story.module.css';

function StoryBlock() {

  return (
    <div className={styles.module}>
      <div className={styles.paragraphWrapper}>
        {data.map((data, index) => {
          let content;
          if (data.para) {
            content = <p key={index} className={styles.contentBlock}>{data.para}</p>;
          } else {
            content = <h2 key={index} className={styles.contentTitle}>{data.title}</h2>;
          }
          return content;
        })}
      </div>
    </div>
  )
}

export default StoryBlock;
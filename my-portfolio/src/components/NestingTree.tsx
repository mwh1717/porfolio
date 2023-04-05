import React from "react";
import { useState } from "react";
import styles from '@/styles/NestingTree.module.css';

const structure = {
  children: [
    {
      text: 'Folder 1',
      children: [
        {
          text: 'file.js',
        },
        {
          text: 'file.css',
        },
        {
          text: 'file.html',
        },
        {
          text: 'Folder 1.a',
          children: [
            {
              text: 'file.md'
            }
          ]
        }
      ]
    },
    {
      text: 'Folder 2',
      children: [
        {
          text: 'file.json'
        }
      ]
    },
    {
      text: 'Folder 3',
      children: [
        {
          text: 'file.js',
        },
        {
          text: 'file.css',
        },
        {
          text: 'Folder 3.a',
          children: [
            {
              text: 'file.md'
            },
            {
              text: 'file.md'
            },
            {
              text: 'file.md'
            }
          ]
        },
        {
          text: 'file.html',
        }
      ]
    },
  ]
}

type FullEntry = {
  text: string;
  children?: FullEntry[];
}

function Entry({ entry, depth, index }: {
  entry: FullEntry;
  depth: number;
  index: number;
}) {

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      {entry.children ? (
      <button onClick={() => setIsExpanded(!isExpanded)} className={styles.button}>
        {isExpanded ? (
          <span className={`${styles.expanded} ${styles.plusMinus}`}>-</span>
        ) : (
          <span className={`${styles.collapsed} ${styles.plusMinus}`}>+</span>
        )}
        {entry.text}
      </button>
      ) : (
        <div>{entry.text}</div>
      )}

      {isExpanded &&
        <div style={{ paddingLeft: `40px` }} className={`child`}>
          {entry.children?.map((entry) => (
            <Entry entry={entry} depth={depth + 1} key={index}/>
          ))}
        </div>
      }
    </div>
  )
}

function NestingTree() {

  return (
    <div className={styles.module}>
      <div className={styles.nestingInstruction}>Click to navigate through the nested file structure</div>
      <div className={styles.nestingWrapper}>
        {structure.children.map((entry, index) => (
          <Entry entry={entry} depth={1} key={index}/>
        ))}
      </div>
    </div>
  )
}

export default NestingTree;
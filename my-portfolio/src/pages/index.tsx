import Image from 'next/image';
import styles from '@/styles/Home.module.css';

export default function Home() {
  return <>
    <div className={styles.pageWrap}>
      <div className={styles.wrapper1}>
        <div className={styles.picture}>
          <Image alt="image of Michael W Howell and his wife at wedding"
            width='300'
            height='450'
            src='/m&k.JPG'
            className={styles.photo}
          />
        </div>
        <div className={styles.gradings}>

        </div>
      </div>
    </div>
  </>
}

import Image from 'next/image';
import styles from '@/styles/Home.module.css';

export default function Home() {
  return <>
    <div className={styles.pageWrap}>
      <div className={styles.wrapper1}>
        <div className={styles.picture}>
          <Image alt="image of Michael W Howell and his wife at wedding"
            width={500}
            height={650}
            style={{
              width: '100%',
              height: 'auto',
            }}
            src='/m&k.JPG'
            className={styles.photo}
          />
        </div>
        <div className={styles.gradings}>
          <div className={styles.techWrapperSingle}>
            <div className={styles.gradingsTitle}>Mastered</div>
            <Image alt="html css and javascript logos"
              width={500}
              height={300}
              style={{
                width: 'auto',
                height: '100px',
              }}
              src='/html5-logo-31816.png'
              className={styles.photo}
            />
          </div>
          <div className={styles.techWrapperDouble}>
            <div className={styles.gradingsTitle}>Aspiring</div>
            <div className={styles.techWrapperDoubleImages}>
            <Image alt="tailwind logo"
                width={100}
                height={100}
                style={{
                  width: 'auto',
                  height: '75px',
                  position: 'relative',
                  top: '12px'
                }}
                src='/tailwind-css.svg'
                className={styles.photo}
              />
              <Image alt="java logo"
                width={100}
                height={100}
                style={{
                  width: 'auto',
                  height: '100px',
                }}
                src='/Java_programming_language_logo.svg'
                className={styles.photo}
              />
              <Image alt="react logo"
                width={100}
                height={100}
                style={{
                  width: 'auto',
                  height: '100px',
                }}
                src='/react-logo.png'
                className={styles.photo}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.wrapper2}>
      </div>
    </div>
  </>
}

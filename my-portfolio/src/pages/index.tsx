import Image from "next/image";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return <>
    <div className={styles.pageWrap}>
      <div className={styles.wrapper1}>
        <div className={styles.picture}>
          <Image alt="image of Michael W Howell and his wife at wedding"
            width={500}
            height={650}
            style={{
              width: "100%",
              height: "auto",
            }}
            src="/m&k.JPG"
            className={styles.photo}
          />
        </div>
        <div className={styles.gradings}>
          <div className={styles.techWrapperSingle}>
            <h2 className={styles.gradingsTitle}>Mastered</h2>
            <Image alt="html css and javascript logos"
              width={500}
              height={300}
              style={{
                width: "auto",
                height: "100px",
              }}
              src="/html5-logo-31816.png"
              className={styles.photo}
            />
          </div>
          <div className={styles.techWrapperDouble}>
            <h2 className={styles.gradingsTitle}>Aspiring</h2>
            <div className={styles.techWrapperDoubleImages}>
              <Image alt="tailwind logo"
                width={100}
                height={100}
                style={{
                  width: "auto",
                  height: "50px",
                  position: "relative",
                  top: "25px"
                }}
                src="/tailwind-css.svg"
                className={styles.photo}
              />
              <Image alt="java logo"
                width={100}
                height={100}
                style={{
                  width: "auto",
                  height: "100px",
                }}
                src="/Java_programming_language_logo.svg"
                className={styles.photo}
              />
              <Image alt="react logo"
                width={100}
                height={100}
                style={{
                  width: "auto",
                  height: "100px",
                }}
                src="/react-logo.png"
                className={styles.photo}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.wrapper2}>
        <h2 className={styles.wrapper2Title}>Who I've Worked For</h2>
        <div className={styles.companiesWrapper}>
          <div className={styles.companyBlock}>
            <h3 className={styles.companyName}>Bank Of America</h3>
            <Image alt="bank of america logo"
                width={100}
                height={100}
                style={{
                  width: "auto",
                  height: "100px",
                }}
                src="/colored_flagscape-v2.png"
              />
            <div className={styles.position}>Software Engineer</div>
          </div>
          <div className={styles.companyBlock}>
            <h3 className={styles.companyName}>Crafted Agency</h3>
            <Image alt="crafted agency logo"
                width={100}
                height={100}
                style={{
                  width: "auto",
                  height: "100px",
                }}
                src="/crafted_logo.png"
              />
            <div className={styles.position}>Development Team Lead</div>
          </div>
          <div className={styles.companyBlock}>
            <h3 className={styles.companyName}>Your Company?</h3>
            <Image alt="qustion mark logo"
                width={100}
                height={100}
                style={{
                  width: "auto",
                  height: "70px",
                  margin: "15px",
                }}
                src="/fi-snsuxl-question-mark.png"
              />
            <div className={styles.position}>????</div>
          </div>
        </div>
      </div>
    </div>
  </>
}

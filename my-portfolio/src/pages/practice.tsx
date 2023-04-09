
import InputSorter from '@/components/InputSorter';
import TextInputValidation from '@/components/TextInputValidation';
import NestingTree from '@/components/NestingTree';
import styles from '@/styles/Practice.module.css';
import Image from 'next/image';

export default function Practice() {
  return (
    <div className={styles.projectDiv}>
      <h2 className={styles.projectDivTitle}>Custom Logic Practice</h2>
      <InputSorter />
      <TextInputValidation />
      <NestingTree />
      <h2 className={styles.projectDivTitle}>Practice Apps</h2>
      <div className={styles.appDiv}>
        <a className={styles.link} href='https://dnd5eshopkeeper.netlify.app/'>
          <Image alt="screenshot of the dnd5e shopkeeper app"
            width={500}
            height={650}
            style={{
              width: "80%",
              height: "auto",
            }}
            src="/shopkeep.jpeg"
            className={styles.photo}
          />
        </a>
        <div className={styles.appDesc}>
          This is my DnD 5e Shopkeeper application, created with NextJS with Typescript and Tailwind. When the user lands on the page initially, an API call is made to the free dnd5eapi to gather all of the 5e magic items. Six random items from that list are selected and an API call is made for each to gather the item&apos;s specific information. Each item is then rendered within a card that has a different border color depending on the item&apos;s rarity. The user can choose to purchase the item, which removes the card from the DOM. More features will be built out at a later time for continued practice.
        </div>
      </div>
    </div>
  )
}
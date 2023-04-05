
import InputSorter from '@/components/InputSorter';
import TextInputValidation from '@/components/TextInputValidation';
import NestingTree from '@/components/NestingTree';
import styles from '@/styles/Practice.module.css';

export default function Practice() {
  return (
    <div className={styles.projectDiv}>
      <h2 className={styles.projectDivTitle}>Custom Logic Practice</h2>
      <InputSorter />
      <TextInputValidation />
      <NestingTree />
    </div>
  )
}
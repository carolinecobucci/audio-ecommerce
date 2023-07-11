import styles from "./CategoryList.module.css";

const CategoryList = () => {
  return (
    <div className={styles.categoryContainer}>
      <div className={styles.category}>Headphone</div>
      <div className={styles.category}>Headband</div>
      <div className={styles.category}>Earpads</div>
      <div className={styles.category}>Cable</div>
    </div>
  );
};

export default CategoryList;

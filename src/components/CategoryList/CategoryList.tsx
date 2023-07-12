import styles from "./CategoryList.module.css";

const CategoryList = () => {
  return (
    <div className={styles.categoryContainer}>
      <input className={styles.radio} type="radio" name="category" id="headphone" />
      <label className={styles.category} htmlFor="headphone">
        Headphone
      </label>

      <input className={styles.radio} type="radio" name="category" id="headband" />
      <label className={styles.category} htmlFor="headband">
        Headband
      </label>

      <input className={styles.radio} type="radio" name="category" id="earpads" />
      <label className={styles.category} htmlFor="earpads">
        Earpads
      </label>

      <input className={styles.radio} type="radio" name="category" id="cable" />
      <label className={styles.category} htmlFor="cable">
        Cable
      </label>
    </div>
  );
};

export default CategoryList;

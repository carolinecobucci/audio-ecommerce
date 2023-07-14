import Button from "../Button/Button";
import CarouselCategory from "../CarouselCategory/CarouselCategory";
import styles from "./Filter.module.css";

const Filter = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.navBar}>
          <h1 className={styles.filter}>Filter</h1>
          <img className={styles.closeIcon} src="/src/assets/close-icon.svg" alt="close" />
        </div>
        <h2 className={styles.titles}>Category</h2>
        <CarouselCategory id={"filter"} />
        <h2 className={styles.titles}>Sort by</h2>
        <div className={styles.sortByCheckboxes}>
          <input
            className={styles.checkbox}
            type="radio"
            name="sortby"
            id="popularity"
            value="Popularity"
          />
          <label className={styles.sortby} htmlFor="popularity">
            Popularity
          </label>
          <input
            className={styles.checkbox}
            type="radio"
            name="sortby"
            id="newest"
            value="newest"
          />
          <label className={styles.sortby} htmlFor="newest">
            Newest
          </label>
          <input
            className={styles.checkbox}
            type="radio"
            name="sortby"
            id="oldest"
            value="oldest"
          />
          <label className={styles.sortby} htmlFor="oldest">
            Oldest
          </label>
          <input
            className={styles.checkbox}
            type="radio"
            name="sortby"
            id="high price"
            value="high price"
          />
          <label className={styles.sortby} htmlFor="high price">
            High Price
          </label>
          <input
            className={styles.checkbox}
            type="radio"
            name="sortby"
            id="low price"
            value="low price"
          />
          <label className={styles.sortby} htmlFor="low price">
            Low Price
          </label>
          <input
            className={styles.checkbox}
            type="radio"
            name="sortby"
            id="review"
            value="review"
          />
          <label className={styles.sortby} htmlFor="review">
            Review
          </label>
        </div>
        <Button type={"submit"} buttonText={"Apply Filter"} />
      </div>
    </div>
  );
};

export default Filter;

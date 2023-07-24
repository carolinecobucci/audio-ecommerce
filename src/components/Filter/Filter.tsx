import CarouselCategory from "../CarouselCategory/CarouselCategory";
import styles from "./Filter.module.css";
import { CategoryTypes, SortByTypes } from "../ExploreProductsPage/ExploreProductsPage";
import closeIcon from "/src/assets/close-icon.svg";

interface FilterPropTypes {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setCategory: React.Dispatch<React.SetStateAction<CategoryTypes["category"]>>;
  setSortBy: React.Dispatch<React.SetStateAction<SortByTypes["sortBy"]>>;
}

const Filter = ({ setOpen, setCategory, setSortBy }: FilterPropTypes) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.navBar}>
          <h1 className={styles.filter}>Filter</h1>
          <button className={styles.closeIcon} onClick={() => setOpen(false)}>
            <img src={closeIcon} alt="close" />
          </button>
        </div>
        <h2 className={styles.titles}>Category</h2>
        <CarouselCategory id={"filter"} setCategory={setCategory} />
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
        <button className={styles.button} onClick={() => setOpen(false)}>
          Apply Filter
        </button>
      </div>
    </>
  );
};

export default Filter;

import InputSearch from "../InputSearch/InputSearch";
import ProductListItem from "../ProductListItem/ProductListItem";
import styles from "./SearchPage.module.css";

const SearchPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navBar}>
        <img src="/src/assets/chevron-left-icon.svg" alt="back" />
        <p className={styles.search}>Search</p>
        <img src="/src/assets/shopping-cart-icon.svg" alt="shopping cart" />
      </div>
      <InputSearch />
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>Popular product</h2>
      </div>
      <ProductListItem />
      <ProductListItem />
      <ProductListItem />
    </div>
  );
};

export default SearchPage;

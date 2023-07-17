import InputSearch from "../InputSearch/InputSearch";
import ProductListItem from "../ProductListItem/ProductListItem";
import styles from "./SearchPage.module.css";
import { Link } from "react-router-dom";

const SearchPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navBar}>
        <Link className={styles.back} to="/">
          <img src="/src/assets/chevron-left-icon.svg" alt="back" />
        </Link>
        <p className={styles.search}>Search</p>
        <Link className={styles.cart} to="/shopping-cart">
          <img src="/src/assets/shopping-cart-icon.svg" alt="shopping cart" />
        </Link>
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

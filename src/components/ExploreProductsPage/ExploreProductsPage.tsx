import ProductGrid from "../ProductGrid/ProductGrid";
import styles from "./ExploreProductsPage.module.css";

const ExploreProductsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navBar}>
        <img src="/src/assets/chevron-left-icon.svg" alt="back" />
        <img src="/src/assets/shopping-cart-icon.svg" alt="shopping cart" />
      </div>
      <div className={styles.titleContainer}>
        <p className={styles.featureProducts}>Feature Products</p>
        <h2 className={styles.seeAll}>See all products</h2>
      </div>
      <div className={styles.filter}>
        <img className={styles.filterImg} src="/src/assets/sliders-icon.svg" alt="filter" />
        <p className={styles.filterText}>Filter</p>
      </div>
      <div className={styles.productsBg}>
        <div className={styles.productsGrid}>
          <ProductGrid />
          <ProductGrid />
          <ProductGrid />
          <ProductGrid />
          <ProductGrid />
          <ProductGrid />
        </div>
      </div>
    </div>
  );
};

export default ExploreProductsPage;

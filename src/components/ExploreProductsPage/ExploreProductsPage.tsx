import ProductGrid from "../ProductGrid/ProductGrid";
import styles from "./ExploreProductsPage.module.css";
import { Link } from "react-router-dom";

const products = [
  {
    productName: "TMA-2 HD Wireless",
    productPrice: "USD 350",
    rate: "4.6",
    reviewNumber: "86 Reviews",
  },
  {
    productName: "TMA-2 HD Wireless",
    productPrice: "USD 350",
    rate: "4.6",
    reviewNumber: "86 Reviews",
  },
  {
    productName: "TMA-2 HD Wireless",
    productPrice: "USD 350",
    rate: "4.6",
    reviewNumber: "86 Reviews",
  },
  {
    productName: "TMA-2 HD Wireless",
    productPrice: "USD 350",
    rate: "4.6",
    reviewNumber: "86 Reviews",
  },
];

const ExploreProductsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navBar}>
        <Link className={styles.back} to="/">
          <img src="/src/assets/chevron-left-icon.svg" alt="back" />
        </Link>
        <Link className={styles.cart} to="/shopping-cart">
          <img src="/src/assets/shopping-cart-icon.svg" alt="shopping cart" />
        </Link>
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
          {products.map((product, i) => (
            <ProductGrid
              key={i}
              productName={product.productName}
              productPrice={product.productPrice}
              rate={product.rate}
              reviewNumber={product.reviewNumber}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreProductsPage;

import styles from "./ProductGrid.module.css";

const ProductGrid = () => {
  return (
    <div className={styles.productGridContainer}>
      <div className={styles.productInfo}>
        <img src="/src/assets/headphone.png" alt="product" />
        <h1 className={styles.productName}>TMA-2 HD Wireless</h1>
        <h2 className={styles.productPrice}>USD 350</h2>
      </div>
      <div className={styles.reviewContainer}>
        <img src="/src/assets/star-fill-icon.svg" alt="star icon" />
        <p className={styles.rate}>4.6</p>
        <p className={styles.reviewNumber}> 86 Reviews</p>
        <img src="/src/assets/more-vertical-icon.svg" alt="see more icon" />
      </div>
    </div>
  );
};

export default ProductGrid;

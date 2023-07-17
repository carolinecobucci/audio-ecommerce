import styles from "./ProductListItem.module.css";

const ProductListItem = () => {
  return (
    <div className={styles.productGridContainer}>
      <div className={styles.imgBg}>
        <img src="/src/assets/headphone.png" alt="product" />
      </div>
      <div className={styles.productInfo}>
        <div className={styles.productNamePrice}>
          <h1 className={styles.productName}>TMA-2 HD Wireless</h1>
          <h2 className={styles.productPrice}>USD 350</h2>
        </div>
        <div className={styles.reviewContainer}>
          <div className={styles.starReviews}>
            <img className={styles.starImg} src="/src/assets/star-fill-icon.svg" alt="star icon" />
            <p className={styles.rate}>4.6</p>
          </div>
          <p className={styles.reviewNumber}> 86 Reviews</p>
          <img src="/src/assets/more-vertical-icon.svg" alt="see more icon" />
        </div>
      </div>
    </div>
  );
};

export default ProductListItem;

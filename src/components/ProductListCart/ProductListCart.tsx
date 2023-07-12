import styles from "./ProductListCart.module.css";

const ProductListCart = () => {
  return (
    <div className={styles.productCartContainer}>
      <div className={styles.imgBg}>
        <img src="/src/assets/headphone.png" alt="product" />
      </div>
      <div className={styles.productInfo}>
        <div className={styles.productNamePrice}>
          <h1 className={styles.productName}>TMA-2 HD Wireless</h1>
          <h2 className={styles.productPrice}>USD 350</h2>
        </div>
        <div className={styles.counterContainer}>
          <img src="/src/assets/trash-light.svg" alt="delete" />
        </div>
      </div>
    </div>
  );
};

export default ProductListCart;

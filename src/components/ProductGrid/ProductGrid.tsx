import styles from "./ProductGrid.module.css";

interface productPropTypes {
  productName: string;
  productPrice: string;
  rate: string;
  reviewNumber: string;
}

const ProductGrid = ({ productName, productPrice, rate, reviewNumber }: productPropTypes) => {
  return (
    <div className={styles.productGridContainer}>
      <div className={styles.productInfo}>
        <img src="/src/assets/headphone.png" alt="product" />
        <h1 className={styles.productName}>{productName}</h1>
        <h2 className={styles.productPrice}>{productPrice}</h2>
      </div>
      <div className={styles.reviewContainer}>
        <div className={styles.starReviews}>
          <img src="/src/assets/star-fill-icon.svg" alt="star icon" />
          <p className={styles.rate}>{rate}</p>
        </div>
        <p className={styles.reviewNumber}>{reviewNumber}</p>
        <img src="/src/assets/more-vertical-icon.svg" alt="see more icon" />
      </div>
    </div>
  );
};

export default ProductGrid;

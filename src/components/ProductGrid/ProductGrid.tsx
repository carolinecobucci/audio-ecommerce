import styles from "./ProductGrid.module.css";
import { Review } from "../CarouselAllProducts/CarouselAllProducts";
import { Link } from "react-router-dom";

interface productPropTypes {
  productId: number;
  productName: string;
  productPrice: string;
  rate: number;
  reviewNumber: Review[];
}

const ProductGrid = ({
  productId,
  productName,
  productPrice,
  rate,
  reviewNumber,
}: productPropTypes) => {
  return (
    <div className={styles.productGridContainer}>
      <div className={styles.productInfo}>
        <img className={styles.productImg} src="/src/assets/headphone.png" alt="product" />
        <div className={styles.productNamePrice}>
          <h1 className={styles.productName}>{productName}</h1>
          <h2 className={styles.productPrice}>{productPrice}</h2>
        </div>
      </div>
      <div className={styles.reviewContainer}>
        <div className={styles.starReviews}>
          <img src="/src/assets/star-fill-icon.svg" alt="star icon" />
          <p className={styles.rate}>{rate}</p>
        </div>
        <p className={styles.reviewNumber}>{reviewNumber.length} Reviews</p>
        <Link to={`/product-overview/${productId}`}>
          <img src="/src/assets/more-vertical-icon.svg" alt="see more icon" />
        </Link>
      </div>
    </div>
  );
};

export default ProductGrid;

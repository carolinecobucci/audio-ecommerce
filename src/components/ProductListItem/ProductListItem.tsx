import styles from "./ProductListItem.module.css";
import { Review } from "../CarouselAllProducts/CarouselAllProducts";
import { Link } from "react-router-dom";

interface productPropTypes {
  productName: string;
  productPrice: string;
  rate: number;
  reviewNumber: Review[];
}

const ProductListItem = ({ productName, productPrice, rate, reviewNumber }: productPropTypes) => {
  return (
    <div className={styles.productGridContainer}>
      <div className={styles.imgBg}>
        <img src="/src/assets/headphone.png" alt="product" />
      </div>
      <div className={styles.productInfo}>
        <div className={styles.productNamePrice}>
          <h1 className={styles.productName}>{productName}</h1>
          <h2 className={styles.productPrice}>{productPrice}</h2>
        </div>
        <div className={styles.reviewContainer}>
          <div className={styles.starReviews}>
            <img className={styles.starImg} src="/src/assets/star-fill-icon.svg" alt="star icon" />
            <p className={styles.rate}>{rate}</p>
          </div>
          <p className={styles.reviewNumber}>{reviewNumber.length} Reviews</p>
          <Link to="/product-overview">
            <img src="/src/assets/more-vertical-icon.svg" alt="see more icon" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductListItem;

import styles from "./ProductDetail.module.css";
import Button from "../Button/Button";

const ProductDetail = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navBar}>
        <img src="/src/assets/chevron-left-icon.svg" alt="back" />
        <img src="/src/assets/shopping-cart-icon.svg" alt="shopping cart" />
      </div>
      <div className={styles.title}>
        <div className={styles.price}>USD 350</div>
        <div className={styles.productName}>TMA-2</div>
        <div className={styles.productName}>HD WIRELESS</div>
      </div>
      <div className={styles.overviewContainer}>
        <p className={styles.overview}>Overview</p>
        <p className={styles.features}>Features</p>
      </div>
      <div className={styles.reviewTextContainer}>
        <h2 className={styles.reviewTextTitle}>Highly Detailed Audio</h2>
        <p className={styles.reviewText}>
          The speaker unit contains a diaphragm that is precision-grown from NAC Audio
          bio-cellulose, making it stiffer, lighter and stronger than regular PET speaker units, and
          allowing the sound-producing diaphragm to vibrate without the levels of distortion found
          in other speakers. The speaker unit contains a diaphragm that is precision-grown from NAC
          Audio bio-cellulose, making it stiffer, lighter and stronger than regular PET speaker
          units, and allowing the sound-producing diaphragm to vibrate without the levels of
          distortion found in other speakers.{" "}
        </p>
      </div>
      <Button type={"submit"} buttonText={"Add to Cart"} />
    </div>
  );
};

export default ProductDetail;

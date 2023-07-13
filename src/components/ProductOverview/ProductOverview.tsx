import Button from "../Button/Button";
import CarouselProductOverview from "../CarouselProductOverview/CarouselProductOverview";
import ProductGrid from "../ProductGrid/ProductGrid";
import ReviewList from "../ReviewList/ReviewList";
import styles from "./ProductOverview.module.css";

const ProductOverview = () => {
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
      <div className={styles.imagesContainer}>
        <CarouselProductOverview />
        {/* <img
          className={styles.productImg}
          src="/src/assets/headphone-overview.png"
          alt="headphone"
        /> */}
      </div>
      <p className={styles.reviews}>Reviews (3)</p>
      <ReviewList />
      <div className={styles.bottonSection}>
        <div className={styles.anotherProductContainer}>
          <p className={styles.anotherProduct}>Another Product</p>
          <p className={styles.seeAll}>See All</p>
        </div>
        <ProductGrid />
      </div>
      <Button type={"submit"} buttonText={"Add to Cart"} />
    </div>
  );
};

export default ProductOverview;

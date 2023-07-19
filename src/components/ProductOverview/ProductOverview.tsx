import { useState } from "react";
import Button from "../Button/Button";
import CarouselAllProducts from "../CarouselAllProducts/CarouselAllProducts";
import CarouselProductOverview from "../CarouselProductOverview/CarouselProductOverview";
import ReviewList from "../ReviewList/ReviewList";
import styles from "./ProductOverview.module.css";
import ProductFeatures from "../ProductFeatures/ProductFeatures";
import greenLine from "/src/assets/green-line.svg";
import { Link } from "react-router-dom";

type OverviewOrFeatures = "overview" | "features";

const ProductOverview = () => {
  const [showOverviewOrFeatures, setShowOverviewOrFeatures] =
    useState<OverviewOrFeatures>("overview");

  const handleOverviewFeatureClick = (option: OverviewOrFeatures) => {
    setShowOverviewOrFeatures(option);
  };

  return (
    <div className={styles.container}>
      <div className={styles.navBar}>
        <Link className={styles.back} to="/explore-products">
          <img src="/src/assets/chevron-left-icon.svg" alt="back" />
        </Link>
        <Link className={styles.cart} to="/shopping-cart">
          <img src="/src/assets/shopping-cart-icon.svg" alt="shopping cart" />
        </Link>
      </div>
      <div className={styles.title}>
        <div className={styles.price}>USD 350</div>
        <div className={styles.productName}>TMA-2</div>
        <div className={styles.productName}>HD WIRELESS</div>
      </div>
      <div className={styles.overviewContainer}>
        <div>
          <button
            className={styles.overview}
            onClick={() => handleOverviewFeatureClick("overview")}
          >
            Overview
          </button>
          {showOverviewOrFeatures === "overview" && (
            <div className={styles.greenLine}>
              <img src={greenLine} alt="green line" />
            </div>
          )}
        </div>
        <div>
          <button
            className={styles.features}
            onClick={() => handleOverviewFeatureClick("features")}
          >
            Features
          </button>
          {showOverviewOrFeatures === "features" && (
            <div className={styles.greenLine}>
              <img src={greenLine} alt="green line" />
            </div>
          )}
        </div>
      </div>
      <div className={styles.imagesContainer}>
        {showOverviewOrFeatures === "overview" && <CarouselProductOverview />}
        {showOverviewOrFeatures === "features" && <ProductFeatures />}
      </div>
      <p className={styles.reviews}>Reviews (2)</p>
      <ReviewList />
      <div className={styles.bottonSection}>
        <div className={styles.anotherProductContainer}>
          <p className={styles.anotherProduct}>Another Product</p>
          <Link className={styles.seeAll} to="/explore-products">
            See All
          </Link>
        </div>
        <div className={styles.carouselContainer}>
          <CarouselAllProducts />
        </div>
      </div>
      <Button type={"submit"} buttonText={"Add to Cart"} />
    </div>
  );
};

export default ProductOverview;

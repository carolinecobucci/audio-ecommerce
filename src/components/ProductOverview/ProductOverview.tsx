import { useState, useEffect } from "react";
import Button from "../Button/Button";
import CarouselAllProducts from "../CarouselAllProducts/CarouselAllProducts";
import CarouselProductOverview from "../CarouselProductOverview/CarouselProductOverview";
import ReviewList from "../ReviewList/ReviewList";
import styles from "./ProductOverview.module.css";
import greenLine from "/src/assets/green-line.svg";
import { Link, useParams } from "react-router-dom";
import axios, { AxiosResponse } from "axios";
import { ProductType } from "../CarouselAllProducts/CarouselAllProducts";

type OverviewOrFeatures = "overview" | "features";

const ProductOverview = () => {
  const [showOverviewOrFeatures, setShowOverviewOrFeatures] =
    useState<OverviewOrFeatures>("overview");

  const handleOverviewFeatureClick = (option: OverviewOrFeatures) => {
    setShowOverviewOrFeatures(option);
  };
  const { productId } = useParams();
  const url = "http://localhost:3000/product";
  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(null);

  const getProductById = (
    productsArray: ProductType[],
    productId: string | undefined
  ): ProductType | undefined => {
    return productsArray.find((product) => product.id.toString() === productId);
  };

  useEffect(() => {
    const fetchProducts = async (): Promise<void> => {
      try {
        const response: AxiosResponse<ProductType[]> = await axios.get(url);
        const product = getProductById(response.data, productId);
        setSelectedProduct(product!);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    void fetchProducts();
  }, [productId]);

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
        <div className={styles.price}>{selectedProduct?.price}</div>
        <div className={styles.productName}>{selectedProduct?.name}</div>
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
        {showOverviewOrFeatures === "features" && (
          <div className={styles.reviewTextContainer}>
            <div className={styles.reviewTextTitle}>{selectedProduct?.category}</div>
            <div className={styles.reviewText}>{selectedProduct?.description}</div>
          </div>
        )}
      </div>
      <p className={styles.reviews}>Reviews (2)</p>
      {/* <ReviewList /> */}
      {selectedProduct?.reviews.map((review) => (
        <ReviewList
          key={review.id}
          reviewUser={review.user}
          reviewDescription={review.description}
        />
      ))}
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

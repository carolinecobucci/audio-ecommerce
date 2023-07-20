import ProductGrid from "../ProductGrid/ProductGrid";
import styles from "./ExploreProductsPage.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import { ProductType } from "../CarouselAllProducts/CarouselAllProducts";

const ExploreProductsPage = () => {
  const url = "http://localhost:3000/product";
  const [products, setProducts] = useState<ProductType[] | null>(null);

  useEffect(() => {
    const fetchProducts = async (): Promise<void> => {
      try {
        const response: AxiosResponse<ProductType[]> = await axios.get(url);
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    void fetchProducts();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.navBar}>
        <Link className={styles.back} to="/">
          <img src="/src/assets/chevron-left-icon.svg" alt="back" />
        </Link>
        <Link className={styles.cart} to="/shopping-cart">
          <img src="/src/assets/shopping-cart-icon.svg" alt="shopping cart" />
        </Link>
      </div>
      <div className={styles.titleContainer}>
        <p className={styles.featureProducts}>Feature Products</p>
        <h2 className={styles.seeAll}>See all products</h2>
      </div>
      <div className={styles.filter}>
        <img className={styles.filterImg} src="/src/assets/sliders-icon.svg" alt="filter" />
        <p className={styles.filterText}>Filter</p>
      </div>
      <div className={styles.productsBg}>
        <div className={styles.productsGrid}>
          {products?.map((product, i) => (
            <ProductGrid
              key={i}
              productId={product.id}
              productName={product.name}
              productPrice={product.price}
              rate={product.rating}
              reviewNumber={product.reviews}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreProductsPage;

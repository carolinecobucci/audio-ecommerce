import InputSearch from "../InputSearch/InputSearch";
import ProductListItem from "../ProductListItem/ProductListItem";
import styles from "./SearchPage.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import { ProductType } from "../CarouselAllProducts/CarouselAllProducts";

const SearchPage = () => {
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
        <p className={styles.search}>Search</p>
        <Link className={styles.cart} to="/shopping-cart">
          <img src="/src/assets/shopping-cart-icon.svg" alt="shopping cart" />
        </Link>
      </div>
      <InputSearch />
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>Popular product</h2>
      </div>
      {products?.map((product, i) => (
        <ProductListItem
          key={i}
          productName={product.name}
          productPrice={product.price}
          rate={product.rating}
          reviewNumber={product.reviews}
        />
      ))}
    </div>
  );
};

export default SearchPage;

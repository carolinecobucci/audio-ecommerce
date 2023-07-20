import ProductListItem from "../ProductListItem/ProductListItem";
import styles from "./SearchPage.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect, ChangeEvent } from "react";
import axios, { AxiosResponse } from "axios";
import { ProductType } from "../CarouselAllProducts/CarouselAllProducts";

const SearchPage = () => {
  const url = "http://localhost:3000/product";
  const [products, setProducts] = useState<ProductType[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState<ProductType[]>([]);
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const fetchProducts = async (): Promise<void> => {
    try {
      const response: AxiosResponse<ProductType[]> = await axios.get(url);
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    void fetchProducts();
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredData(products);
    } else {
      const filteredResults = products.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredData(filteredResults);
    }
  }, [searchTerm, products]);

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
      <div>
        <input
          className={styles.searchInput}
          type="search"
          name="search"
          id="search"
          placeholder="Search headphone"
          value={searchTerm}
          onChange={handleInputChange}
        />
      </div>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>Popular product</h2>
      </div>
      {filteredData.map((product, i) => (
        <ProductListItem
          key={i}
          productId={product.id}
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

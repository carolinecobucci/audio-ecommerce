import styles from "./CarouselAllProducts.module.css";
import { Fragment } from "react";
import { motion } from "framer-motion";
import ProductGrid from "../ProductGrid/ProductGrid";
import { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";

export interface Review {
  user: string;
  description: string;
  rating: number;
  date: string;
  id: number;
}

export interface ProductType {
  imageUrl: string;
  rating: number;
  price: string;
  name: string;
  description: string;
  category: string;
  created_at: string;
  reviews: Review[];
  id: number;
}

const CarouselAllProducts = () => {
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
    <Fragment>
      <motion.div className={styles.carousel} whileTap={{ cursor: "grabbing" }}>
        <motion.div
          className={styles.inner}
          drag="x"
          dragConstraints={{ right: 0, left: -910 }}
          // initial={{ x: 100 }}
          // animate={{ x: 0 }}
          // transition={{ duration: 0.8 }}
        >
          {products?.map((product, i) => (
            <motion.div className={styles.item} key={i}>
              <ProductGrid
                productId={product.id}
                productName={product.name}
                productPrice={product.price}
                rate={product.rating}
                reviewNumber={product.reviews}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </Fragment>
  );
};

export default CarouselAllProducts;

import styles from "./CarouselAllProducts.module.css";
import { Fragment } from "react";
import { motion } from "framer-motion";
import ProductGrid from "../ProductGrid/ProductGrid";

const products = [
  {
    productName: "TMA-2 HD Wireless",
    productPrice: "USD 350",
    rate: "4.6",
    reviewNumber: "86 Reviews",
  },
  {
    productName: "TMA-2 HD Wireless",
    productPrice: "USD 350",
    rate: "4.6",
    reviewNumber: "86 Reviews",
  },
  {
    productName: "TMA-2 HD Wireless",
    productPrice: "USD 350",
    rate: "4.6",
    reviewNumber: "86 Reviews",
  },
  {
    productName: "TMA-2 HD Wireless",
    productPrice: "USD 350",
    rate: "4.6",
    reviewNumber: "86 Reviews",
  },
];

const CarouselAllProducts = () => {
  return (
    <Fragment>
      <motion.div className={styles.carousel} whileTap={{ cursor: "grabbing" }}>
        <motion.div
          className={styles.inner}
          drag="x"
          dragConstraints={{ right: 0, left: -600 }}
          // initial={{ x: 100 }}
          // animate={{ x: 0 }}
          // transition={{ duration: 0.8 }}
        >
          {products.map((product, i) => (
            <motion.div className={styles.item} key={i}>
              <ProductGrid
                productName={product.productName}
                productPrice={product.productPrice}
                rate={product.rate}
                reviewNumber={product.reviewNumber}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </Fragment>
  );
};

export default CarouselAllProducts;

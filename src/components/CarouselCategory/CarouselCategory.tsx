import styles from "./CarouselCategory.module.css";
import { Fragment } from "react";
import { motion } from "framer-motion";

const CarouselCategory = () => {
  return (
    <Fragment>
      <motion.div className={styles.carousel} whileTap={{ cursor: "grabbing" }}>
        <motion.div
          className={styles.inner}
          drag="x"
          dragConstraints={{ right: 0, left: -100 }}
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div className={styles.item}>
            <input className={styles.radio} type="radio" name="category" id="headphone" />
            <label className={styles.category} htmlFor="headphone">
              Headphone
            </label>
          </motion.div>

          <motion.div className={styles.item}>
            <input className={styles.radio} type="radio" name="category" id="headband" />
            <label className={styles.category} htmlFor="headband">
              Headband
            </label>
          </motion.div>

          <motion.div className={styles.item}>
            <input className={styles.radio} type="radio" name="category" id="earpads" />
            <label className={styles.category} htmlFor="earpads">
              Earpads
            </label>
          </motion.div>

          <motion.div className={styles.item}>
            <input className={styles.radio} type="radio" name="category" id="cable" />
            <label className={styles.category} htmlFor="cable">
              Cable
            </label>
          </motion.div>
        </motion.div>
      </motion.div>
    </Fragment>
  );
};

export default CarouselCategory;

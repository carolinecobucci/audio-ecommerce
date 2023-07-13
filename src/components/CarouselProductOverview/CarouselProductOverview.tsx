import { useState, useEffect, useRef, Fragment } from "react";
import styles from "./CarouselProductOverview.module.css";
import { motion } from "framer-motion";
import headphone1 from "/src/assets/headphone-overview.png";
import headphone2 from "/src/assets/headphone-overview-2.png";

const CarouselProductOverview = () => {
  //   const carousel = useRef<HTMLDivElement>(null);
  //   const [width, setWidth] = useState<number>(0);

  //   useEffect(() => {
  //     if (carousel.current) {
  //       setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  //     }
  //   }, []);

  return (
    <Fragment>
      <motion.div
        // ref={carousel}
        className={styles.carousel}
        // whileDrag={{ cursor: "grabbing" }}
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          className={styles.inner}
          drag="x"
          dragConstraints={{ right: 0, left: -200 }}
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div className={styles.itemContainer}>
            <img className={styles.img1} src={headphone1} alt="headphone" />
          </motion.div>
          <motion.div className={styles.itemContainer}>
            <img className={styles.img2} src={headphone2} alt="headphone" />
          </motion.div>
        </motion.div>
      </motion.div>
    </Fragment>
  );
};

export default CarouselProductOverview;

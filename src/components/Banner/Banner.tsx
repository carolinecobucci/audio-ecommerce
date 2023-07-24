import { Link } from "react-router-dom";
import styles from "./Banner.module.css";
import arrowRightIcon from "/src/assets/arrow-right-icon.svg";
import headphone from "/src/assets/headphone.png";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.productContainer}>
        <h1 className={styles.productName}>TMA-2 Modular Headphone</h1>
        <Link className={styles.shopNow} to="/explore-products">
          <p>Shop now</p>
          <img src={arrowRightIcon} alt="shop now icon" />
        </Link>
      </div>
      <img src={headphone} alt="headphone" />
    </div>
  );
};

export default Banner;

import styles from "./Banner.module.css";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.productContainer}>
        <h1 className={styles.productName}>TMA-2 Modular Headphone</h1>
        <div className={styles.shopNow}>
          <p>Shop now</p>
          <img src="/src/assets/arrow-right-icon.svg" alt="shop now icon" />
        </div>
      </div>
      <img src="/src/assets/headphone.png" alt="headphone" />
    </div>
  );
};

export default Banner;

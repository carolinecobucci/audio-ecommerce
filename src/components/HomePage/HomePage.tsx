import Banner from "../Banner/Banner";
import CarouselAllProducts from "../CarouselAllProducts/CarouselAllProducts";
import CarouselCategory from "../CarouselCategory/CarouselCategory";
import InputSearch from "../InputSearch/InputSearch";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.userGreetingContainer}>
        <h1 className={styles.userGreeting}>Hi, Andrea</h1>
        <p className={styles.userGreetingSubText}>What are you looking for today?</p>
      </div>
      <InputSearch />
      <div className={styles.productsBg}>
        <CarouselCategory />
        <Banner />

        <div className={styles.featureProductsContainer}>
          <p className={styles.featureProducts}>Feature Products</p>
          <p className={styles.seeAll}>See All</p>
        </div>
        <div className={styles.carouselContainer}>
          <CarouselAllProducts />
        </div>
      </div>
    </div>
  );
};

export default HomePage;

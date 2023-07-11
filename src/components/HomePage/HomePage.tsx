import Banner from "../Banner/Banner";
import CategoryList from "../CategoryList/CategoryList";
import InputSearch from "../InputSearch/InputSearch";
import ProductGrid from "../ProductGrid/ProductGrid";
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
        <CategoryList />
        <Banner />

        <div className={styles.featureProductsContainer}>
          <p className={styles.featureProducts}>Feature Products</p>
          <p className={styles.seeAll}>See All</p>
        </div>
        <ProductGrid />
      </div>
    </div>
  );
};

export default HomePage;

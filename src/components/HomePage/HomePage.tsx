import CategoryList from "../CategoryList/CategoryList";
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
        <CategoryList />
      </div>
    </div>
  );
};

export default HomePage;

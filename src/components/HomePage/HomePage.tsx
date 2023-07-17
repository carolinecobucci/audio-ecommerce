import Banner from "../Banner/Banner";
import CarouselAllProducts from "../CarouselAllProducts/CarouselAllProducts";
import CarouselCategory from "../CarouselCategory/CarouselCategory";
import InputSearch from "../InputSearch/InputSearch";
import styles from "./HomePage.module.css";
import { Link } from "react-router-dom";
// import { signOut } from "firebase/auth";
// import { auth } from "../../config/firebase";

const HomePage = () => {
  // const logout = async (): Promise<void> => {
  //   try {
  //     await signOut(auth);
  //     navigate("/sign-in");
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  return (
    <div className={styles.container}>
      {/* <button onClick={logout}>Logout</button> */}
      <div className={styles.userGreetingContainer}>
        <h1 className={styles.userGreeting}>Hi, Andrea</h1>
        <p className={styles.userGreetingSubText}>What are you looking for today?</p>
      </div>
      <InputSearch />
      <div className={styles.productsBg}>
        <CarouselCategory id={"home-page"} />
        <Banner />
        <div className={styles.featureProductsContainer}>
          <p className={styles.featureProducts}>Feature Products</p>
          <Link className={styles.seeAll} to="/explore-products">
            See All
          </Link>
        </div>
        <div className={styles.carouselContainer}>
          <CarouselAllProducts />
        </div>
      </div>
    </div>
  );
};

export default HomePage;

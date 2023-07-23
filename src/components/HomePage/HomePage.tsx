import { useEffect, useContext } from "react";
import Banner from "../Banner/Banner";
import CarouselAllProducts from "../CarouselAllProducts/CarouselAllProducts";
import CarouselCategory from "../CarouselCategory/CarouselCategory";
import styles from "./HomePage.module.css";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase";
import { useNavigate } from "react-router-dom";
import { GlobalUserContext, GlobalUserContextType } from "../../context/GlobalUserContext";
import { CategoryTypes, SortByTypes } from "../ExploreProductsPage/ExploreProductsPage";

interface FilterPropTypes {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setCategory: React.Dispatch<React.SetStateAction<CategoryTypes["category"]>>;
  setSortBy: React.Dispatch<React.SetStateAction<SortByTypes["sortBy"]>>;
}

const HomePage = ({ setOpen, setCategory, setSortBy }: FilterPropTypes) => {
  const logout = async (): Promise<void> => {
    try {
      await signOut(auth);
      navigate("/sign-in");
    } catch (err) {
      console.error(err);
    }
  };
  const navigate = useNavigate();
  const { globalUser, setGlobalUser } = useContext<GlobalUserContextType>(GlobalUserContext);

  useEffect(() => {
    if (auth) {
      setGlobalUser({
        username: auth.currentUser!.displayName,
        profilePicture: auth.currentUser!.photoURL,
        cart: globalUser!.cart,
      });
    }
  }, []);

  const handleButtonClick = () => {
    // Navegar para outra página
    navigate("/search");
  };

  return (
    <div className={styles.container}>
      <div className={styles.navBar}>
        <button className={styles.menuIcon}>
          <img src="/src/assets/menu-icon.svg" alt="menu icon" />
        </button>
        <div className={styles.menuLogo}>
          <img src="/src/assets/audio-logo.svg" alt="audio logo" />
          Audio
        </div>
        <button
          className={styles.logoutButton}
          onClick={() => {
            logout().catch((error) => console.error(error));
          }}
        >
          {globalUser?.profilePicture ? (
            <img src={globalUser?.profilePicture} alt="profile picture" />
          ) : (
            <img src="/src/assets/user.png" alt="profile picture" />
          )}
        </button>
      </div>
      <div className={styles.userGreetingContainer}>
        <h1 className={styles.userGreeting}>Hi, {globalUser?.username}</h1>
        <p className={styles.userGreetingSubText}>What are you looking for today?</p>
        <div>
          <input
            className={styles.search}
            type="search"
            name="search"
            id="search"
            placeholder="Search headphone"
            onClick={handleButtonClick}
          />
        </div>
      </div>
      <div className={styles.productsBg}>
        <CarouselCategory id={"home-page"} setCategory={setCategory} />
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

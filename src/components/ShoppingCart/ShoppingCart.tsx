import { useContext } from "react";
import ProductListCart from "../ProductListCart/ProductListCart";
import styles from "./ShoppingCart.module.css";
import { Link } from "react-router-dom";
import { GlobalUserContext, GlobalUserContextType } from "../../context/GlobalUserContext";
import { ProductType } from "../CarouselAllProducts/CarouselAllProducts";

const ShoppingCart = () => {
  const { globalUser, setGlobalUser } = useContext<GlobalUserContextType>(GlobalUserContext);

  const removeAllItems = () => {
    setGlobalUser({
      username: globalUser!.username,
      profilePicture: globalUser!.profilePicture,
      cart: [],
    });
  };

  const calculateTotalDollars = () => {
    const sum = globalUser?.cart.reduce((accumulator, currentValue) => {
      const priceString = currentValue.price.slice(1);
      const priceFloat = parseFloat(priceString);
      return accumulator + priceFloat;
    }, 0);

    return sum!.toFixed(2);
  };

  return (
    <div className={styles.container}>
      <div className={styles.navBar}>
        <Link className={styles.back} to="/explore-products">
          <img src="/src/assets/chevron-left-icon.svg" alt="back" />
        </Link>
        <p className={styles.shoppingCart}>Shopping Cart</p>
        <button onClick={() => removeAllItems()}>
          <img src="/src/assets/trash-2-icon.svg" alt="remove all cart items" />
        </button>
      </div>
      <div>
        {globalUser?.cart &&
          globalUser?.cart?.map((product: ProductType) => {
            return <ProductListCart key={product.id} name={product.name} price={product.price} />;
          })}
      </div>
      <div className={styles.bottomContainer}>
        <div className={styles.totalContainer}>
          <p className={styles.totalItems}>{`Total ${globalUser!.cart.length} items`}</p>
          <p className={styles.totalDollars}>${calculateTotalDollars()}</p>
        </div>
        <button className={styles.checkoutButton}>
          Proceed to Checkout <img src="/src/assets/chevron-right-icon.svg" alt="right arrow" />
        </button>
      </div>
    </div>
  );
};

export default ShoppingCart;

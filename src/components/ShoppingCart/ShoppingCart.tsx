import { useContext } from "react";
import ProductListCart from "../ProductListCart/ProductListCart";
import styles from "./ShoppingCart.module.css";
import { Link } from "react-router-dom";
import { GlobalUserContext, GlobalUserContextType } from "../../context/GlobalUserContext";
import { ProductType } from "../CarouselAllProducts/CarouselAllProducts";
import leftIcon from "/src/assets/chevron-left-icon.svg";
import trashDarkIcon from "/src/assets/trash-2-icon.svg";
import rightIcon from "/src/assets/chevron-right-icon.svg";

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
    const sum = globalUser?.cart.reduce((accumulator, product) => {
      const priceString = product.price.slice(1); // remove simbolo de dollar
      const priceFloat = parseFloat(priceString); // transforma em float
      const quantityMultiplier = priceFloat * product.quantity; // multiplica por quantidade do item
      return accumulator + quantityMultiplier;
    }, 0);

    return sum!.toFixed(2);
  };

  const getTotalItems = () => {
    const sum = globalUser?.cart.reduce((accumulator, product) => {
      return accumulator + product.quantity;
    }, 0);

    return sum;
  };

  return (
    <div className={styles.container}>
      <div className={styles.navBar}>
        <Link className={styles.back} to="/explore-products">
          <img src={leftIcon} alt="back" />
        </Link>
        <p className={styles.shoppingCart}>Shopping Cart</p>
        <button className={styles.removeButton} onClick={() => removeAllItems()}>
          <img src={trashDarkIcon} alt="remove all cart items" />
        </button>
      </div>
      <div className={styles.listAndButtonContainer}>
        <div className={styles.productList}>
          {globalUser?.cart &&
            globalUser?.cart?.map((product: ProductType) => {
              return (
                <ProductListCart
                  key={product.id}
                  productId={product.id}
                  name={product.name}
                  price={product.price}
                  quantity={product.quantity}
                />
              );
            })}
        </div>
        <div className={styles.bottomContainer}>
          <div className={styles.totalContainer}>
            <p className={styles.totalItems}>{`Total ${getTotalItems()!} items`}</p>
            <p className={styles.totalDollars}>${calculateTotalDollars()}</p>
          </div>
          <button className={styles.checkoutButton}>
            Proceed to Checkout <img src={rightIcon} alt="right arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;

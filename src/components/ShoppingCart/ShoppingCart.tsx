import ProductListCart from "../ProductListCart/ProductListCart";
import styles from "./ShoppingCart.module.css";

const ShoppingCart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navBar}>
        <img src="/src/assets/chevron-left-icon.svg" alt="back" />
        <p className={styles.shoppingCart}>Shopping Cart</p>
        <img src="/src/assets/trash-2-icon.svg" alt="shopping cart" />
      </div>
      <ProductListCart />
      <ProductListCart />
      <ProductListCart />
      <div className={styles.totalContainer}>
        <p className={styles.totalItems}>Total 2 Items</p>
        <p className={styles.totalDolars}>USD 295</p>
      </div>
      <button className={styles.checkoutButton}>
        Proceed to Checkout <img src="/src/assets/chevron-right-icon.svg" alt="right arrow" />
      </button>
    </div>
  );
};

export default ShoppingCart;

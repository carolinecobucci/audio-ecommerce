import { useState, useEffect, useContext } from "react";
import styles from "./ProductListCart.module.css";
import { GlobalUserContext, GlobalUserContextType } from "../../context/GlobalUserContext";
import { ProductType } from "../CarouselAllProducts/CarouselAllProducts";

interface ProductListCartPropType {
  productId: number;
  name: string;
  price: string;
  quantity: number;
}

const ProductListCart = ({ productId, name, price, quantity }: ProductListCartPropType) => {
  const { globalUser, setGlobalUser } = useContext<GlobalUserContextType>(GlobalUserContext);

  const findProductIndex = (productId: number): number => {
    const index = globalUser?.cart.findIndex((product) => product.id === productId);
    return index !== undefined ? index : -1;
  };

  const incrementQuantity = () => {
    if (!globalUser) return;
    const position: number = findProductIndex(productId);

    const cartCopy: ProductType[] = [...globalUser.cart];
    cartCopy[position].quantity++;

    setGlobalUser({
      ...globalUser,
      cart: cartCopy,
    });
  };

  const decrementQuantity = () => {
    if (!globalUser) return;
    const position: number = findProductIndex(productId);

    const cartCopy: ProductType[] = [...globalUser.cart];
    cartCopy[position].quantity--;

    if (cartCopy[position].quantity === 0) {
      removeItem();
    } else {
      setGlobalUser({
        ...globalUser,
        cart: cartCopy,
      });
    }
  };

  const removeItem = () => {
    if (!globalUser) return;
    const position: number = findProductIndex(productId);
    const cartCopy: ProductType[] = [...globalUser.cart];

    cartCopy.splice(position, 1);

    setGlobalUser({
      ...globalUser,
      cart: cartCopy,
    });
  };

  return (
    <div className={styles.productCartContainer}>
      <div className={styles.imgBg}>
        <img src="/src/assets/headphone.png" alt="product" />
      </div>
      <div className={styles.productInfo}>
        <div className={styles.productNamePrice}>
          <h1 className={styles.productName}>{name}</h1>
          <h2 className={styles.productPrice}>{price}</h2>
        </div>
        <div className={styles.counterContainer}>
          <div className={styles.counter}>
            <button className={styles.counterMinus} onClick={() => decrementQuantity()}>
              <img src="/src/assets/minus-icon.svg" alt="minus" />
            </button>
            <p>{quantity}</p>
            <button className={styles.counterPlus} onClick={() => incrementQuantity()}>
              <img src="/src/assets/plus-icon.svg" alt="plus" />
            </button>
          </div>
          <button className={styles.removeItemButton} onClick={() => removeItem()}>
            <img src="/src/assets/trash-light.svg" alt="delete" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductListCart;

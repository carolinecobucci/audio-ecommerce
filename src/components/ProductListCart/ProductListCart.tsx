import styles from "./ProductListCart.module.css";

interface ProductListCartPropType {
  name: string;
  price: string;
  quantity: number;
}

const ProductListCart = ({ name, price, quantity }: ProductListCartPropType) => {
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
            <button className={styles.counterMinus}>
              <img src="/src/assets/minus-icon.svg" alt="minus" />
            </button>
            <p>{quantity}</p>
            <button className={styles.counterPlus}>
              <img src="/src/assets/plus-icon.svg" alt="plus" />
            </button>
          </div>
          <button className={styles.removeItemButton}>
            <img src="/src/assets/trash-light.svg" alt="delete" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductListCart;

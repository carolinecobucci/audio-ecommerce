import styles from "./Button.module.css";

const Button = () => {
  return (
    <div>
      <button className={styles.button} type="submit">
        Sign In
      </button>
    </div>
  );
};

export default Button;

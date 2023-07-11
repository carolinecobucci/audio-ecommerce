import styles from "./Button.module.css";

const Button = ({
  type,
  buttonText,
}: {
  type: "button" | "submit" | "reset" | undefined;
  buttonText: string;
}) => {
  return (
    <div>
      <button className={styles.button} type={type}>
        {buttonText}
      </button>
    </div>
  );
};

export default Button;

import React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  buttonText: string;
  // onClickHandler: () => void;
}

// const Button: React.FC<ButtonProps> = ({ type, buttonText, onClickHandler }) => {
const Button: React.FC<ButtonProps> = ({ type, buttonText }) => {
  return (
    <div>
      {/* <button className={styles.button} type={type} onClick={onClickHandler}> */}
      <button className={styles.button} type={type}>
        {buttonText}
      </button>
    </div>
  );
};

export default Button;

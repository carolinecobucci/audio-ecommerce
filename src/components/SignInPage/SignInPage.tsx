import Button from "../Button/Button";
import styles from "./SignInPage.module.css";

const SignInPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Audio</h1>
        <p className={styles.subTitle}>It's modular and designed to last</p>
      </div>
      <div className={styles.inputContainer}>
        <input
          className={styles.emailInput}
          type="email"
          name="email"
          id="email"
          placeholder="Email"
        />
        <input
          className={styles.passwordInput}
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
        <a className={styles.forgotPassword}>Forgot Password</a>
      </div>
      <div className={styles.signInContainer}>
        <Button />
        <p className={styles.createAccount}>
          Didn't have any account? <a className={styles.signUpHere}>Sign Up here</a>
        </p>
      </div>
    </div>
  );
};

export default SignInPage;

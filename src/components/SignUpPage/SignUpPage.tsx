import styles from "./SignUpPage.module.css";
import Button from "../Button/Button";

const SignUpPage = () => {
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
      </div>
      <div className={styles.signInContainer}>
        <Button type={"submit"} buttonText={"Sign Up"} />
        <div className={styles.socialLoginContainer}>
          <div className={styles.socialIcons}>
            <img src="/src/assets/apple-icon.svg" alt="apple icon" />
          </div>
          <div className={styles.socialIcons}>
            <img src="/src/assets/facebook-icon.svg" alt="facebook icon" />
          </div>
          <div className={styles.socialIcons}>
            <img src="/src/assets/google-icon.svg" alt="google icon" />
          </div>
        </div>
        <p className={styles.signIn}>
          If you have an account? <a className={styles.signUpHere}>Sign In here </a>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;

import styles from "./SignInPage.module.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../../config/firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signUp = async (): Promise<void> => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/"); // depois de usuario criado com sucesso, navega para HOME
    } catch (err) {
      console.error(err);
    }
  };

  const signUpWithGoogle = async (): Promise<void> => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  // verifica se usuario no firebase ja esta logado
  // se estiver, ja vai pra home
  // firebase ja persiste usuario, muito util!
  useEffect(() => {
    if (auth?.currentUser?.email) {
      navigate("/");
    }
  }, [navigate]);

  const [signUpFlag, setSignUpFlag] = useState(true);

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
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className={styles.passwordInput}
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <a className={styles.forgotPassword}>Forgot Password</a>
      </div>
      <div className={styles.signInContainer}>
        {signUpFlag ? (
          <button
            className={styles.signUpButton}
            onClick={() => {
              signUp().catch((error) => console.error(error));
            }}
          >
            Sign Up
          </button>
        ) : (
          <button className={styles.signInButton}>
            Sign In
            {/* TODO criar metodo de SIGN IN (usuario ja existente) */}
          </button>
        )}

        <div className={styles.socialLoginContainer}>
          <button className={styles.socialIcons}>
            <img src="/src/assets/facebook-icon.svg" alt="facebook icon" />
          </button>
          <div
            onClick={() => {
              signUpWithGoogle().catch((error) => console.error(error));
            }}
            className={styles.socialIcons}
          >
            <img src="/src/assets/google-icon.svg" alt="google icon" />
          </div>
        </div>
        {signUpFlag ? (
          <p className={styles.createAccount}>
            If you have an account.{" "}
            <a className={styles.signUpHere} onClick={() => setSignUpFlag(false)}>
              Sign In here
            </a>
          </p>
        ) : (
          <p className={styles.createAccount}>
            Don't have any account?{" "}
            <a className={styles.signUpHere} onClick={() => setSignUpFlag(true)}>
              Sign Up here
            </a>
          </p>
        )}
      </div>
    </div>
  );
};

export default SignInPage;

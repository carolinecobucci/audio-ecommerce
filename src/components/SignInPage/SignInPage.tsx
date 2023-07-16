import { useEffect, useState } from "react";
import Button from "../Button/Button";
import styles from "./SignInPage.module.css";
import { useNavigate } from "react-router-dom";

import { auth } from "../../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signIn = async (): Promise<void> => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/"); // depois de usuario criado com sucesso, navega para HOME
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    // verifica se usuario no firebase ja esta logado
    // se estiver, ja vai pra home
    // firebase ja persiste usuario, muito util!
    if (auth?.currentUser?.email) {
      navigate("/");
    }
  }, [navigate]);

  const [signUpFlag, setSignUpFlag] = useState(false);

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
          // TODO passar o metodo de onclick por parametro
          // OU modificar o Button para ser somente de estilo
          // <Button type={"submit"} buttonText={"Sign Up"} />
          <Button type={"submit"} buttonText={"Sign Up"} />
        ) : (
          // <Button type={"submit"} buttonText={"Sign In"} />
          <button
            onClick={() => {
              signIn().catch((error) => console.error(error));
            }}
          >
            Sign In
          </button>
        )}

        <div className={styles.socialLoginContainer}>
          <div className={styles.socialIcons}>
            <img src="/src/assets/facebook-icon.svg" alt="facebook icon" />
          </div>
          <div className={styles.socialIcons}>
            <img src="/src/assets/google-icon.svg" alt="google icon" />
          </div>
        </div>
        {signUpFlag ? (
          <p className={styles.createAccount}>
            Don't have any account?{" "}
            <a className={styles.signUpHere} onClick={() => setSignUpFlag(false)}>
              Sign Up here
            </a>
          </p>
        ) : (
          <p className={styles.createAccount}>
            If you have an account,{" "}
            <a className={styles.signUpHere} onClick={() => setSignUpFlag(true)}>
              Sign In here
            </a>
          </p>
        )}
      </div>
    </div>
  );
};

export default SignInPage;

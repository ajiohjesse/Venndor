import styles from "../styles/AuthCard.module.css";
import { useState } from "react";

const Login = ({ setLoginForm }) => {
  const [loginError, setLoginError] = useState("");

  const [loginCredentials, setLoginCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const handleLoginChange = e => {
    setLoginCredentials(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <form onChange={handleLoginChange}>
        <h2>Sign In</h2>
        <p className={styles.error}>{loginError}</p>
        <div className={styles.inputGroup}>
          <label htmlFor="username">Username</label>
          <input type="text" placeholder="username" name="username" />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password">Password</label>
          <input type="password" placeholder="password" name="password" />
        </div>
        <button type="submit" className={styles.submitBtn}>
          Log in
        </button>
      </form>
      <div className={styles.toggle}>
        <p>Don't have an account?</p>
        <button onClick={() => setLoginForm(false)}>Sign up</button>
      </div>
    </>
  );
};

export default Login;

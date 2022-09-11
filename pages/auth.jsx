import styles from "../styles/Auth.module.css";
import Image from "next/image";
import logo from "../public/venndor.svg";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import Router from "next/router";

import Login from "../components/Login";
import Signup from "../components/Signup";

const Auth = () => {
  const [loginForm, setLoginForm] = useState(true);

  const { dispatch } = useContext(AuthContext);

  return (
    <div className={styles.auth}>
      <div className={styles.container}>
        <div className={styles.banner}>
          <div className={styles.logo}>
            <Image
              src={logo}
              layout="fill"
              objectFit="contain"
              alt="venndor-logo"
            />
          </div>
          <h1>Venndor.</h1>
          <p>The online marketplace.</p>
        </div>
        <div className={styles.validate}>
          {loginForm ? (
            <Login setLoginForm={setLoginForm} />
          ) : (
            <Signup setLoginForm={setLoginForm} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;

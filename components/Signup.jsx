import styles from "../styles/AuthCard.module.css";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import client from "../apollo-client";
import { toast } from "react-hot-toast";
import {
  CREATE_ACCOUNT,
  PUBLISH_ACCOUNT,
} from "../graphql/mutations/userMutations";
import Router from "next/router";

const Signup = ({ setLoginForm }) => {
  const [signupError, setSignupError] = useState("");

  const [signupCredentials, setSignupCredentials] = useState({
    firstname: null,
    lastname: null,
    username: null,
    phone: null,
    password: null,
  });

  const handleSignupChange = e => {
    setSignupCredentials(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    setSignupError("");
  };

  const [createUser] = useMutation(CREATE_ACCOUNT);

  const handleSignUp = async e => {
    e.preventDefault();

    toast.loading("Creating Account. . .");

    await fetch("/api/createAccount", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...signupCredentials,
      }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.networkError) {
          const msg = data.networkError.result.errors[0].message;
          setSignupError(msg);

          toast.dismiss();
        } else {
          toast.dismiss();
          toast.success("Account Created!");
          Router.push(`/accounts/${data}`)
        }
      });
  };

  return (
    <>
      <form onChange={handleSignupChange}>
        <h2>Create Account</h2>
        <p className={styles.error}>{signupError}</p>

        <div className={styles.inputGroup}>
          <label htmlFor="firstname">Firstname</label>
          <input type="text" placeholder="firstname" name="firstname" />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="lastname">Lastname</label>
          <input type="text" placeholder="lastname" name="lastname" />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="username">Username</label>
          <input type="text" placeholder="username" name="username" />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="phone">Phone</label>
          <input type="text" placeholder="phone" name="phone" />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="password">Password</label>
          <input type="password" placeholder="password" name="password" />
        </div>

        <button className={styles.submitBtn} onClick={handleSignUp}>
          Sign up
        </button>
      </form>

      <div className={styles.toggle}>
        <p>Already have an account?</p>
        <button onClick={() => setLoginForm(true)}>Sign in</button>
      </div>
    </>
  );
};

export default Signup;

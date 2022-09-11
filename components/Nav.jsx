import styles from "../styles/Nav.module.css";

import Image from "next/image";
import logoIcon from "../public/venndor.svg";
import dynamic from "next/dynamic";
import Router from "next/router";
import Menu from "./Menu";
import { useState } from "react";
import Cart from "./Cart";

const ThemeToggle = dynamic(() => import("../components/ThemeToggle"), {
  ssr: false,
});

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const returnHome = () => {
    Router.push("/");
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        <div className={styles.logo} onClick={returnHome}>
          <div className={styles.logoIcon}>
            <Image src={logoIcon} alt="Venndor" />
          </div>
          <h2>Venndor </h2>
        </div>

        <div className={styles.navIcons}>
          <ThemeToggle />

          <button
            className={styles.menuBtn}
            type="button"
            title="Open Menu"
            onClick={() => setMenuOpen(true)}
          >
            <span className={styles.menuBar}></span>
            <span className={styles.menuBar}></span>
            <span className={styles.menuBar}></span>
          </button>

          <button
            type="button"
            title="Shopping Cart"
            className={styles.cart}
            onClick={() => setCartOpen(true)}
          >
            <span className={styles.cartCount}>6</span>
            <svg
              className={styles.cartIcon}
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
          </button>
        </div>
      </div>
      <Menu state={[menuOpen, setMenuOpen]} />
      <Cart state={[cartOpen, setCartOpen]} />
    </nav>
  );
};

export default Nav;

import styles from "../styles/Menu.module.css";
import Image from "next/image";
import profile from "../public/profile.jpg";
import product from "../public/product1.jpg";
import Router from "next/router";
import CloseBtn from "./CloseBtn";

const Menu = props => {
  const [menuOpen, setMenuOpen] = props.state;

  const menuClass = menuOpen
    ? [styles.menu, styles.active].join(" ")
    : styles.menu;

  const categories = [
    {
      title: "All Products",
      image: product,
      slug: "all",
    },
    {
      title: "Art",
      image: product,
      slug: "all",
    },
    {
      title: "Computing",
      image: product,
      slug: "all",
    },
    {
      title: "Electronics",
      image: product,
      slug: "all",
    },
    {
      title: "Phones & Tablets",
      image: product,
      slug: "all",
    },
    {
      title: "Mobile Accessories",
      image: product,
      slug: "all",
    },
    {
      title: "Groceries",
      image: product,
      slug: "all",
    },
    {
      title: "Food & Beverages",
      image: product,
      slug: "all",
    },
    {
      title: "Home & Kitchen",
      image: product,
      slug: "all",
    },
    {
      title: "Men's Fashion",
      image: product,
      slug: "all",
    },
    {
      title: "Women's Fashion",
      image: product,
      slug: "all",
    },
    {
      title: "Jewelry",
      image: product,
      slug: "all",
    },
    {
      title: "Kid's Corner",
      image: product,
      slug: "all",
    },
    {
      title: "Sporting Goods",
      image: product,
      slug: "all",
    },
    {
      title: "Health & Beauty",
      image: product,
      slug: "all",
    },
    {
      title: "Services",
      image: product,
      slug: "all",
    },
    {
      title: "Others",
      image: product,
      slug: "all",
    },
  ];

  const toCategory = slug => {
    Router.push(`/categories/${slug}`);
  };

  const toLocation = location => {
    Router.push(location);
  };

  return (
    <div className={menuClass}>
      <CloseBtn
        className={styles.closeBtn}
        type="button"
        title="Close Menu"
        onClick={() => setMenuOpen(false)}
      />

      <div className={styles.menuContainer}>
        <div className={styles.profileDetails}>
          <div className={styles.profileImage}>
            <Image
              src={profile}
              height={80}
              width={80}
              objectFit="cover"
              objectPosition="top"
            />
          </div>
          <div className={styles.profileText}>
            <h4> Jesse Ajioh</h4>
            <button onClick={() => toLocation("/user/profile")}>
              My Profile
            </button>
          </div>
        </div>

        <div className={styles.menuLinks}>
          <h3 className={styles.heading}>Menu</h3>
          <ul className={styles.menuItems}>
            <li className={styles.item} onClick={() => toLocation("/")}>
              <span className={styles.icon} data-name="home">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 20 20"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                </svg>
              </span>
              <span className={styles.menuItemTitle}>Home</span>
            </li>

            <li className={styles.item} onClick={() => toLocation("/search")}>
              <span className={styles.icon} data-name="search">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  version="1.1"
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M15.504 13.616l-3.79-3.223c-0.392-0.353-0.811-0.514-1.149-0.499 0.895-1.048 1.435-2.407 1.435-3.893 0-3.314-2.686-6-6-6s-6 2.686-6 6 2.686 6 6 6c1.486 0 2.845-0.54 3.893-1.435-0.016 0.338 0.146 0.757 0.499 1.149l3.223 3.79c0.552 0.613 1.453 0.665 2.003 0.115s0.498-1.452-0.115-2.003zM6 10c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"></path>
                </svg>
              </span>
              <span className={styles.menuItemTitle}>Search</span>
            </li>

            <li
              className={styles.item}
              onClick={() => toLocation("/user/orders")}
            >
              <span className={styles.icon} data-name="track">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 576 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"></path>
                </svg>
              </span>
              <span className={styles.menuItemTitle}>Track Orders</span>
            </li>
          </ul>
        </div>

        <div className={styles.categories}>
          <h3 className={styles.heading}>Categories</h3>
          <ul className={styles.menuItems}>
            {categories.map((category, index) => (
              <li
                className={styles.item}
                key={index}
                onClick={() => toCategory(category.slug)}
              >
                <div className={styles.categoryImage}>
                  <Image
                    src={category.image}
                    height={40}
                    width={40}
                    objectFit="cover"
                    objectPosition="top"
                  />
                </div>
                <span className={styles.menuItemTitle}>{category.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;

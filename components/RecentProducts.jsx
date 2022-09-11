import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/RecentProducts.module.css";
import ProductCard from "./ProductCard";
import product from "../public/product.jpg";
import slide1 from "../public/slide1.jpg";
import slide2 from "../public/slide2.jpg";
import product1 from "../public/product1.jpg";
import Link from "next/link";
import { faLightbulb } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import SearchBar from "./SearchBar";

const RecentProducts = () => {
  const products = [
    {
      image: product,
      title: "Vintage shirts",
      category: "Unisex Fashion",
      price: 5000,
      location: "Makurdi",
      store: "Rehx Stores",
      slug: "product",
      variants: [
        {
          title: "Size",
          options: ["M", "L", "XL", "XXL"],
        },
        {
          title: "Color",
          options: ["Blue", "Red", "Green"],
        },
        {
          title: "Brand",
          options: ["Gucci", "Dior", "Armani"],
        },
      ],
      description:
        "Get the best vintage shirts available in makurdi. Avalibale for both male and female. Contact 07017890895",
    },
    {
      image: slide1,
      title:
        "Fresh fruits: cucumber, carrots, cabbage, green beans, peas, oranges",
      price: 1000,
      category: "Farm Produce",
      location: "Gboko",
      store: "Max Farm products limited",
      slug: "product",
      variants: [
        {
          title: "Fruits",
          options: ["Mango", "Orange", "Banana", "Water melon"],
        },
        {
          title: "Vegetables",
          options: ["carrots", "Cabbage", "Green beans"],
        },
      ],
      description:
        "We'll provide you with fresh from the farm products at cheap rates. Contact 07017890895",
    },
    {
      image: product1,
      title: "Vintage Chelsea Boots",
      category: "Mens Fashion",
      price: 25000,
      location: "Makurdi",
      store: "Rehx Stores",
      slug: "product",
    },
    {
      image: slide2,
      title: "Fresh Farm Tomatoes",
      category: "Farm Produce",
      price: 500,
      location: "Makurdi",
      store: "Agro Farms limited",
      slug: "product",
    },
    {
      image: product,
      title: "Vintage shirts",
      price: 5000,
      location: "Makurdi",
      store: "Rehx Stores",
      slug: "product",
    },
    {
      image: slide1,
      title:
        "Fresh fruits: cucumber, carrots, cabbage, green beans, peas, oranges",
      price: 1000,
      location: "Gboko",
      store: "Max Farm products limited",
      slug: "product",
    },
    {
      image: product1,
      title: "Vintage Chelsea Boots",
      price: 25000,
      location: "Makurdi",
      store: "Rehx Stores",
      slug: "product",
    },
    {
      image: slide2,
      title: "Fresh Farm Tomatoes",
      price: 500,
      location: "Makurdi",
      store: "Agro Farms limited",
      slug: "product",
    },
  ];

  const [openFilter, setOpenFilter] = useState(false);

  return (
    <>
      <SearchBar />
      <div className={styles.recent}>
        <div className={styles.container}>
          <div className={styles.heading}>
            <h2>Recently Added</h2>
            <button
              type="button"
              title="Filter products"
              onClick={() => setOpenFilter(!openFilter)}
            >
              <FontAwesomeIcon icon={faFilter} />
              <svg
                className={styles.filterIcon}
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path fill="none" d="M0 0H24V24H0z"></path>
                  <path d="M21 18v2H3v-2h18zM6.596 3.904L8.01 5.318 4.828 8.5l3.182 3.182-1.414 1.414L2 8.5l4.596-4.596zM21 11v2h-9v-2h9zm0-7v2h-9V4h9z"></path>
                </g>
              </svg>
            </button>
            {openFilter && (
              <div className={styles.filter}>
                <div className={styles.filterContainer}>
                  <h3>Filter by:</h3>
                  <div className={styles.inputGroup}>
                    <label htmlFor="filter location">Location:</label>
                    <input
                      type="text"
                      placeholder="Type a location"
                      name="filter location"
                    />
                  </div>
                  <p className={styles.filterNotice}>
                    <FontAwesomeIcon
                      icon={faLightbulb}
                      className={styles.lightBulb}
                    />
                    Use the <Link href="/search">Search page</Link> for a more
                    detailed search.
                  </p>
                  <button type="button" title="Apply filter">
                    Apply filter
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className={styles.productGrid}>
            {products.map((product, index) => (
              <ProductCard product={product} key={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentProducts;

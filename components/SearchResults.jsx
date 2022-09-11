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

const SearchResults = () => {
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

  return (
    <div className={styles.recent}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <h2>Search Results:</h2>
        </div>

        <div className={styles.productGrid}>
          {products.map((product, index) => (
            <ProductCard product={product} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;

import styles from "../styles/ProductCard.module.css";
import Image from "next/image";
import { stringLength } from "../utils/stringLength";
import Router from "next/router";
import ProductPopup from "./ProductPopup";
import { useState } from "react";

const ProductCard = ({ product }) => {
  const [openPopup, setOpenPopup] = useState(false);

  return (
    <>
      <div className={styles.card} onClick={() => setOpenPopup(true)}>
        <span className={styles.category}>{product.category || "Others"}</span>
        <div className={styles.image}>
          <Image
            src={product.image}
            layout="fill"
            objectFit="cover"
            objectPosition="top"
            alt="product"
          />
        </div>
        <div className={styles.details}>
          <h4>{stringLength(product.title, 45)}</h4>
          <p className={styles.price}>NGN {stringLength(product.price, 14)}</p>
          <p className={styles.location}>Location: Benue State/ Makurdi</p>
          {/* <ul>
            <li>
              Listed in:{" "}
              <span
                className={styles.storeName}
                onClick={() => Router.push(`/stores/${product.slug}`)}
              >
                {stringLength(product.location, 15)}
              </span>
            </li>
            <li>
              Store:{" "}
              <span
                className={styles.storeName}
                onClick={() => Router.push(`/stores/${product.slug}`)}
              >
                {stringLength(product.store, 14)}
              </span>
            </li>
            <li>
              Category:{" "}
              <span
                className={styles.storeName}
                onClick={() => Router.push(`/stores/${product.slug}`)}
              >
                {stringLength(product.category || "Others", 14)}
              </span>
            </li>
          </ul> */}
        </div>
        {/* <div className={styles.buttons}>
          <button onClick={() => setOpenPopup(true)}>Details</button>
        </div> */}
      </div>
      {openPopup && (
        <ProductPopup setOpenPopup={setOpenPopup} product={product} />
      )}
    </>
  );
};

export default ProductCard;

import styles from "../styles/CartItem.module.css";
import Image from "next/image";
import product from "../public/product.jpg";
import { stringLength } from "../utils/stringLength";

const CartItem = () => {
  return (
    <div className={styles.cartItem}>
      <div className={styles.top}>
        <div className={styles.cartImage}>
          <Image
            src={product}
            layout="fill"
            objectFit="cover"
            objectPosition="top"
            placeholder="blur"
            alt="product"
          />
        </div>
        <div className={styles.cartDetails}>
          <p className={styles.title}>
            {stringLength(
              `Vintage shirts and and incredibly long name that is too long to
          be here`,
              42
            )}
          </p>
          <ul>
            <li>NGN 5000</li>
            <li>Listed in: Makurdi</li>
            <li>
              Store: <span className={styles.storeName}>Rehx stores</span>
            </li>
          </ul>

          <span className={styles.quantity}>Quantity: 1</span>
        </div>
      </div>
      <div className={styles.variants}>
        <div className={styles.variant}>
          <p>Size:</p>
          <span>M</span>
        </div>
        <div className={styles.variant}>
          <p>Color:</p>
          <span>Blue</span>
        </div>
      </div>

      <button className={styles.removeBtn}>Remove</button>
    </div>
  );
};

export default CartItem;

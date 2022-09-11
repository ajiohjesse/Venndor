import styles from "../styles/ListedProduct.module.css";
import { faEdit, faEye, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import product from "../public/product.jpg";
import Image from "next/image";

const PendingOrder = () => {
  return (
    <div className={styles.row}>
      <div className={styles.image}>
        <Image
          src={product}
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          alt="product"
        />
      </div>
      <p className={styles.title}>
        Unisex Vintage shirts and a very long name that is too long
      </p>
      <p>Buyer: @rehxofficial</p>
      <p>Quantity: 1</p>
      <div className={styles.buttons}>
        <button className={styles.view}>
          <FontAwesomeIcon icon={faEye} />
        </button>
        <button className={styles.edit}>
          <FontAwesomeIcon icon={faEdit} />
        </button>
        <button className={styles.delete}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </div>
  );
};

export default PendingOrder;

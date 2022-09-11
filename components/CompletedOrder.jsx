// import styles from "../styles/completedOrder.module.css";
import styles from "../styles/ListedProduct.module.css";
import { faEdit, faEye, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import product from "../public/product.jpg";
import Image from "next/image";

const CompletedOrder = () => {
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
        <span className={styles.orderStatus} data-name="delivered">
          Declivered
        </span>
      </div>
    </div>
  );
};

export default CompletedOrder;

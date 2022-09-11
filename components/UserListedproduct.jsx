import styles from "../styles/ListedProduct.module.css";
import { faEdit, faEye, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import product from "../public/product.jpg";
import Image from "next/image";

const UserListedProduct = ({ product }) => {
  return (
    <div className={styles.row}>
      <div className={styles.image}>
        <Image
          src={product.image?.url}
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          alt="product"
        />
      </div>
      <p className={styles.title}>{product.name}</p>
      <p>Category: {product.category}</p>
      <p>NGN {product.price}</p>
      <div className={styles.buttons}>
        <button className={styles.view}>
          <FontAwesomeIcon icon={faEye} />
        </button>
      </div>
    </div>
  );
};

export default UserListedProduct;

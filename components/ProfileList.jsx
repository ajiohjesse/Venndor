import styles from "../styles/ProfileList.module.css";
import { faEdit, faEye, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import product from "../public/product.jpg";
import Image from "next/image";
import ListedProduct from "./ListedProduct";
import PendingOrder from "./PendingOrder";
import CompletedOrder from "./CompletedOrder";

const ProfileList = () => {
  return (
    <div className={styles.listed}>
      <div className={styles.wrapper}>
        <div className={styles.heading}>
          <h2>
            <span
              className={styles.colorIcon}
              data-name="listedProducts"
            ></span>
            Products you've Listed: <span>13</span>
          </h2>
          <button>+ Add product</button>
        </div>
        <div className={styles.container}>
          <div className={styles.column}>
            <ListedProduct />
          </div>
        </div>
      </div>

      <div className={styles.wrapper}>
        <div className={styles.heading}>
          <h2>
            <span className={styles.colorIcon} data-name="pendingOrders"></span>
            Pending Orders: <span>13</span>
          </h2>
        </div>
        <div className={styles.container}>
          <div className={styles.column}>
            <PendingOrder />
          </div>
        </div>
      </div>

      <div className={styles.wrapper}>
        <div className={styles.heading}>
          <h2>
            <span className={styles.colorIcon} data-name="processingOrders"></span>
            Processing Orders: <span>13</span>
          </h2>
        </div>
        <div className={styles.container}>
          <div className={styles.column}>
            <PendingOrder />
          </div>
        </div>
      </div>

      <div className={styles.wrapper}>
        <div className={styles.heading}>
          <h2>
            <span className={styles.colorIcon} data-name="completedOrders"></span>
            Completed Orders: <span>13</span>
          </h2>
        </div>
        <div className={styles.container}>
          <div className={styles.column}>
            <CompletedOrder/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileList;

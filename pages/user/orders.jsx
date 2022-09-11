import styles from "../../styles/ProfileList.module.css";
import PendingOrder from "../../components/PendingOrder";
import CompletedOrder from "../../components/CompletedOrder";

const Orders = () => {
  return (
    <div className={styles.listed}>
      <h2 className={styles.pageTitle}>Orders You made:</h2>
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
            <span
              className={styles.colorIcon}
              data-name="processingOrders"
            ></span>
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
            <span
              className={styles.colorIcon}
              data-name="completedOrders"
            ></span>
            Completed Orders: <span>13</span>
          </h2>
        </div>
        <div className={styles.container}>
          <div className={styles.column}>
            <CompletedOrder />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;

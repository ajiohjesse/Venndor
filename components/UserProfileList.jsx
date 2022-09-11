import styles from "../styles/ProfileList.module.css";

import UserListedProduct from "./UserListedproduct";

const UserProfileList = ({ products }) => {
  return (
    <div className={styles.listed}>
      {products ? (
        <div className={styles.wrapper}>
          <div className={styles.heading}>
            <h2>
              <span
                className={styles.colorIcon}
                data-name="listedProducts"
              ></span>
              Listed Products: <span>{products.length}</span>
            </h2>
          </div>
          <div className={styles.container}>
            <div className={styles.column}>
              {products.map((product, i) => (
                <UserListedProduct key={1} product={product} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="">No product listed</div>
      )}
    </div>
  );
};

export default UserProfileList;

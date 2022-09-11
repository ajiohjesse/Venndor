import styles from "../styles/Cart.module.css";
import CartItem from "./CartItem";
import CloseBtn from "./CloseBtn";

const Cart = props => {
  const [cartOpen, setCartOpen] = props.state;

  const cartClass = cartOpen
    ? [styles.cart, styles.active].join(" ")
    : styles.cart;

  return (
    <div className={cartClass}>
      <div className={styles.headButtons}>
        <CloseBtn
          className={styles.closeBtn}
          type="button"
          title="Close Menu"
          onClick={() => setCartOpen(false)}
        />

        <button className={styles.clearCart} type="button" title="Clear cart">
          Clear cart
        </button>
      </div>

      <div className={styles.container}>
        <div className={styles.heading}>
          <h3>
            Your cart: <span className={styles.value}>5 Items</span>
          </h3>
          <h3>
            Total price: <span className={styles.value}>NGN 5700</span>
          </h3>
        </div>

        <CartItem />
        <button className={styles.orderBtn}>Make order request</button>
      </div>
    </div>
  );
};

export default Cart;

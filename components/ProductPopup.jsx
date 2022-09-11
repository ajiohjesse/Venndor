import styles from "../styles/ProductPopup.module.css";
import Image from "next/image";
import productImg from "../public/product.jpg";
import CloseBtn from "../components/CloseBtn";
import { useState } from "react";

const ProductPopup = ({ setOpenPopup, product }) => {
  const [openImageModal, setOpenImageModal] = useState(false);

  const cartProduct = {
    variants: [],
  };

  const updateVariant = (title, option) => {
    const selectedVariant = cartProduct.variants.find(
      variant => variant.title === title
    );

    if (selectedVariant) {
      const newVariants = cartProduct.variants.filter(
        variant => variant.title !== title
      );

      newVariants.push({ title, option });
      cartProduct.variants = newVariants;
    } else {
      cartProduct.variants.push({ title, option });
    }
  };

  const handleChange = e => {
    updateVariant(e.target.name, e.target.value);
  };

  return (
    <div className={styles.popup}>
      <CloseBtn
        className={styles.closeBtn}
        type="button"
        title="Close popup"
        onClick={() => setOpenPopup(false)}
      />
      {openImageModal && (
        <div className={styles.popup}>
          <CloseBtn
            className={styles.closeBtn}
            type="button"
            title="Close popup"
            onClick={() => setOpenImageModal(false)}
          />
          <div className={styles.container}>
            <div className={styles.modalImg}>
              <Image
                src={product.image}
                layout="fill"
                objectFit="contain"
                objectPosition="top"
                placeholder="blur"
                alt="product"
              />
            </div>
          </div>
        </div>
      )}
      <div className={styles.container}>
        <div className={styles.popupItem}>
          <div className={styles.top}>
            <div
              className={styles.popupImage}
              onClick={() => setOpenImageModal(true)}
            >
              <Image
                src={product.image}
                layout="fill"
                objectFit="cover"
                objectPosition="top"
                placeholder="blur"
                alt="product"
              />
            </div>
            <div className={styles.popupDetails}>
              <p className={styles.title}>{product.title}</p>
              <ul>
                <li className={styles.price}>NGN {product.price}</li>
                <li>Listed in: {product.location}</li>
                <li>
                  Store:{" "}
                  <span className={styles.storeName}>{product.store}</span>
                </li>
                <li>
                  Category:{" "}
                  <span className={styles.storeName}>
                    {product.category || "Others"}
                  </span>
                </li>
              </ul>

              <div className={styles.quantity}>
                <label htmlFor="quantity">Quantity:</label>
                <input type="number" name="quantity" placeholder="1" min="1" />
              </div>
            </div>
          </div>

          <div className={styles.description}>
            <h3 className={styles.descHeading}>Description:</h3>
            <p>{product.description}</p>
          </div>

          {product.variants && (
            <>
              <h3 className={styles.variantHeading}>Variants:</h3>
              <div className={styles.variants}>
                {product.variants.map((variant, index) => (
                  <div className={styles.variant} key={index}>
                    <p className={styles.variantTitle}>{variant.title}:</p>

                    {variant.options.map((option, index) => (
                      <span key={index}>
                        {option}
                        <input
                          type="radio"
                          value={option}
                          name={variant.title}
                          onChange={e => handleChange(e)}
                        />
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </>
          )}

          <button className={styles.removeBtn}>&#43; Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductPopup;

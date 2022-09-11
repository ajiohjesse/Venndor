import styles from "../styles/Featured.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import product1 from "../public/product1.jpg";
import product2 from "../public/product2.jpg";
import product3 from "../public/product3.jpg";
import slide1 from "../public/slide1.jpg";
import slide2 from "../public/slide2.jpg";
import Router from "next/router";
import Image from "next/image";
import Slider from "../utils/Slider";
import { useEffect } from "react";
import { stringLength } from "../utils/stringLength";

const Featured = () => {
  useEffect(() => {
    const slider = new Slider("featuredSlider");
    slider.pause();
  }, []);

  const products = [
    {
      title: "Fresh carrots, peas, cuccumbers and cabbage",
      location: "Makurdi",
      price: 700,
      Image: slide1,
      slug: "product",
    },
    {
      title: "Farm fresh tommatoes",
      location: "Gboko",
      price: 300,
      Image: slide2,
      slug: "product",
    },
    {
      title: "Vintage chelsea boots",
      location: "Onitsha",
      price: 25000,
      Image: product1,
      slug: "product",
    },
  ];

  const stores = [
    {
      image: product1,
      title: "Rehx Stores",
      rating: 4,
      slug: "store",
    },
    {
      image: product2,
      title: "Carzily long title for a store",
      rating: 3.5,
      slug: "store",
    },
    {
      image: product1,
      title: "Another crazily long name that should not be written",
      rating: 2,
      slug: "store",
    },
    {
      image: product2,
      title: "Rehx Stores",
      rating: 5,
      slug: "store",
    },
    {
      image: product1,
      title: "Rehx Stores",
      rating: 4,
      slug: "store",
    },
    {
      image: product1,
      title: "Rehx Stores",
      rating: 2.5,
      slug: "store",
    },
  ];

  const getEmptyStars = rating => {
    const emptyStars = Math.round(5 - rating);

    if (emptyStars + Math.round(rating) > 5) {
      const newEmptystars = Math.floor(5 - rating);
      return newEmptystars;
    }
    return emptyStars;
  };

  return (
    <div className={styles.featured}>
      <div className={styles.container}>
        <h2>Discover</h2>

        <div className={styles.grid}>
          <div className={styles.slider} id="featuredSlider">
            {products.map((product, index) => (
              <div className={["slide", styles.slide].join(" ")} key={index}>
                <Image
                  src={product.Image}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  placeholder="blur"
                  alt={product.title}
                />
                <div className={styles.slideFilter}></div>
                <div className={styles.slideText}>
                  <h4>{product.title}</h4>
                  <p>{`Listed in ${product.location}`}</p>
                  <p>{`NGN ${product.price}`}</p>
                  <button
                    type="button"
                    name="product details"
                    title="View product details"
                    onClick={() => Router.push(`/products/${product.slug}`)}
                  >
                    Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.stores}>
            <h3 className={styles.storeHeading}>Popular Stores</h3>

            <div className={styles.storeGrid}>
              {stores.map((store, index) => (
                <div className={styles.store} key={index}>
                  <div className={styles.storeImg}>
                    <Image
                      src={store.image}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                      className={styles.image}
                    />
                    <div className={styles.rating}>
                      {Array(Math.round(store.rating))
                        .fill(null)
                        .map((_, i) => (
                          <FontAwesomeIcon icon={faStar} key={i} />
                        ))}

                      {Array(getEmptyStars(store.rating))
                        .fill(null)
                        .map((_, i) => (
                          <FontAwesomeIcon
                            icon={faStar}
                            className={styles.emptyStar}
                            key={i}
                          />
                        ))}
                    </div>
                  </div>

                  <h4>{stringLength(store.title, 12)}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;

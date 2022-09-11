import styles from "../styles/Hero.module.css";
import SearchBar from "./SearchBar";
import cover from "../public/cover.jpg";
import cover2 from "../public/shopping.gif";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.banner}>
            <Image
              src={cover}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className={styles.heroImg}
            />
            <div className={styles.filter}>
              <div className={styles.filterText}>
                <h1>Venndor.</h1>
                <p>The Online Marketplace.</p>
              </div>
              <div className={styles.bgText}>
                <h1>BUY.</h1>
                <h1>SELL.</h1>
                <h1>EXPLORE.</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

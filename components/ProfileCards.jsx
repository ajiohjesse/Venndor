import { faPen, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/ProfileCards.module.css";
import profile from "../public/profile.jpg";
import product from "../public/product.jpg";
import Image from "next/image";
import { BsFacebook, BsWhatsapp, BsTwitter, BsInstagram } from "react-icons/bs";
import { MdStorefront } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";

const ProfileCards = () => {
  const store = {
    image: "product1",
    title: "Rehx Stores",
    rating: 2.5,
    slug: "store",
  };

  const getEmptyStars = rating => {
    const emptyStars = Math.round(5 - rating);

    if (emptyStars + Math.round(rating) > 5) {
      const newEmptystars = Math.floor(5 - rating);
      return newEmptystars;
    }
    return emptyStars;
  };

  return (
    <div className={styles.profileCards}>
      <div className={styles.container}>
        <div className={styles.profile}>
          <div className={styles.heading}>
            <h3>
              <CgProfile className={styles.headIcon} />
              My profile
            </h3>
            <button className={styles.editIcon}>
              <FontAwesomeIcon icon={faPen} />
            </button>
          </div>
          <div className={styles.details}>
            <div className={styles.image}>
              <Image
                src={profile}
                layout="fill"
                objectFit="cover"
                objectPosition="top"
                alt="profile"
              />
            </div>
            <div className={styles.text}>
              <h3>Jesse Ajioh</h3>
              <p className={styles.username}>rehxofficial</p>
              <ul>
                <li>Email: rehx@gmail.com</li>
                <li>Phone: 07017890895</li>
              </ul>
            </div>
          </div>
          <div className={styles.footer}>
            <h4>Bio:</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              atque alias autem consequuntur cumque laborum sint maxime.
            </p>
            <h4>Social Media:</h4>
            <div className={styles.social}>
              <BsFacebook className={styles.facebook} />
              <BsWhatsapp className={styles.whatsapp} />
              <BsInstagram className={styles.instagram} />
              <BsTwitter className={styles.twitter} />
            </div>
          </div>
        </div>
        <div className={styles.profile}>
          <div className={styles.heading}>
            <h3>
              <MdStorefront className={styles.headIcon} />
              My Store
            </h3>
            <button className={styles.editIcon}>
              <FontAwesomeIcon icon={faPen} />
            </button>
          </div>
          <div className={styles.details}>
            <div className={styles.image}>
              <Image
                src={product}
                layout="fill"
                objectFit="cover"
                objectPosition="top"
                alt="profile"
              />
            </div>
            <div className={styles.text}>
              <h3>Rehx Stores</h3>
              <p className={styles.tagline}>
                This is the tagline of the store.
              </p>
              <h4>Address:</h4>
              <p>51 Benue crescent, wadata, makurdi.</p>
            </div>
          </div>
          <div className={styles.footer}>
            <h4>Description:</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              atque alias autem consequuntur cumque laborum sint maxime
              dignissimos saepe aliquam. Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Ullam, ad?
            </p>
            <div className={styles.storeDetails}>
              <p>
                Location:{" "}
                <span className={styles.location}>Benue, Makurdi</span>
              </p>

              <p>
                Rating:
                <span className={styles.stars}>
                  {Array(Math.round(store.rating))
                    .fill(null)
                    .map((_, i) => (
                      <FontAwesomeIcon
                        icon={faStar}
                        key={i}
                        className={styles.goldStar}
                      />
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
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCards;

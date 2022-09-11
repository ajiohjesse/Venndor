import { faPen, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/ProfileCards.module.css";
import userImg from "../public/userImg.jpg";
import storeImg from "../public/storeImg.jpg";
import Image from "next/image";
import { BsFacebook, BsWhatsapp, BsTwitter, BsInstagram } from "react-icons/bs";
import { MdStorefront } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";

const UserProfileCards = ({ user }) => {
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
              Profile
            </h3>
          </div>
          <div className={styles.details}>
            <div className={styles.image}>
              <Image
                src={user.avatar?.url || userImg}
                layout="fill"
                objectFit="cover"
                objectPosition="top"
                alt="profile"
              />
            </div>
            <div className={styles.text}>
              <h3>
                {user.firstname} {user.lastname}
              </h3>
              <p className={styles.username}>{user.username}</p>
              <ul>
                <li>Email: {user.email}</li>
                <li>Phone: {user.phone || "No contact Listed"}</li>
              </ul>
            </div>
          </div>
          <div className={styles.footer}>
            <h4>Bio:</h4>
            <p>{user.bio || "No bio available"}</p>
            {(user.facebook ||
              user.whatsapp ||
              user.instagram ||
              user.twitter) && <h4>Social Media:</h4>}
            <div className={styles.social}>
              {user.facebook && <BsFacebook className={styles.facebook} />}
              {user.whatsapp && <BsWhatsapp className={styles.whatsapp} />}
              {user.instagram && <BsInstagram className={styles.instagram} />}
              {user.twitter && <BsTwitter className={styles.twitter} />}
            </div>
          </div>
        </div>
        <div className={styles.profile}>
          <div className={styles.heading}>
            <h3>
              <MdStorefront className={styles.headIcon} />
              Store
            </h3>
          </div>
          <div className={styles.details}>
            <div className={styles.image}>
              <Image
                src={user.store?.avatar?.url || storeImg}
                layout="fill"
                objectFit="cover"
                objectPosition="top"
              />
            </div>
            {user.store ? (
              <div className={styles.text}>
                <h3>{user.store?.name}</h3>
                <p className={styles.tagline}>{user.store?.tagline || ""}</p>
                <h4>Address:</h4>
                <p>{user.store?.address}</p>
              </div>
            ) : (
              <p>This venndor is yet to create a store.</p>
            )}
          </div>
          {user.store && (
            <div className={styles.footer}>
              <h4>Description:</h4>
              <p>{user.store?.description}</p>
              <div className={styles.storeDetails}>
                <p>
                  Location:{" "}
                  <span className={styles.location}>{user.store?.state}</span>
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
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfileCards;

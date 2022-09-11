import { faFilter, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/SearchFilters.module.css";

const SearchFilters = () => {
  const categories = [
    {
      title: "All Products",
      slug: "all",
    },
    {
      title: "Art",
      slug: "art",
    },
    {
      title: "Computing",
      slug: "computing",
    },
    {
      title: "Electronics",
      slug: "electronics",
    },
    {
      title: "Phones & Tablets",
      slug: "phones & tablets",
    },
    {
      title: "Mobile Accessories",
      slug: "mobile accessories",
    },
    {
      title: "Groceries",
      slug: "groceries",
    },
    {
      title: "Food & Beverages",
      slug: "food & beverages",
    },
    {
      title: "Home & Kitchen",
      slug: "home & kitchen",
    },
    {
      title: "Men's Fashion",
      slug: "men's fashion",
    },
    {
      title: "Women's Fashion",
      slug: "women's fashion",
    },
    {
      title: "Jewelry",
      slug: "jewelry",
    },
    {
      title: "Kid's Corner",
      slug: "kid's corner",
    },
    {
      title: "Sporting Goods",
      slug: "sporting goods",
    },
    {
      title: "Health & Beauty",
      slug: "health & beauty",
    },
    {
      title: "Services",
      slug: "health & beauty",
    },
    {
      title: "Others",
      slug: "others",
    },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.searchBar}>
          <h3>Search:</h3>
          <div className={styles.input}>
            <input type="text" placeholder="Type here. . ." />
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
        </div>

        <div className={styles.filters}>
          <div className={styles.title}>
            <FontAwesomeIcon icon={faFilter} />
            <h4>Filter results by:</h4>
          </div>

          <div className={styles.filterWrapper}>
            <ul>
              <li>
                <p>Category:</p>
                <select name="category" defaultValue="all">
                  {categories.map((category, i) => (
                    <option value={category.slug} key={i}>
                      {category.title}
                    </option>
                  ))}
                </select>
              </li>
              <li>
                <p>Location:</p>
                <input type="text" placeholder="Type a location. . ." />
              </li>
            </ul>
            <ul>
              <li>
                <p>Min. Price:</p>
                <input type="number" placeholder="NGN" min="0" />
              </li>
              <li>
                <p>Max. Price:</p>
                <input type="number" placeholder="NGN" min="0" />
              </li>
            </ul>
            <div className={styles.tags}>
              <p>Tags:</p>
              <textarea
                name="tags"
                cols="30"
                rows="10"
                placeholder="bags, guccihandbags"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchFilters;

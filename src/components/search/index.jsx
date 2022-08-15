import { useState } from "react";
import { ImSearch } from "react-icons/im";
import styles from "./search.module.css";
import { useNavigate } from "react-router-dom";
export const Search = ({ setPage }) => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");
  const handleChange = (e) => {
    setSearchText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setPage(1);
    navigate(`/?search=${searchText}&page=1`);
    setSearchText("");
  };

  return (
    <form className={styles.searchContainer} onSubmit={handleSubmit}>
      <div className={styles.searchBox}>
        <input
          className={styles.searchInput}
          placeholder="Search a character..."
          type="text"
          onChange={handleChange}
          value={searchText}
        ></input>
        <button className={styles.searchButton}>
          <ImSearch size={20} />
        </button>
      </div>
    </form>
  );
};

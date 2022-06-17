import React, { useRef } from "react";
import styles from "./searchHeader.module.css";

const SearchHeader = ({ onSearch, onInit }) => {
  const ref = useRef();

  const onSearchClick = (event) => {
    event.preventDefault();
    const keyword = ref.current.value;
    onSearch(keyword);
  };

  const onLogoClick = () => {
    ref.current.value = "";
    onInit();
  };

  return (
    <header>
      <img
        className={styles.logo}
        src="/images/YouTube_Logo.svg.png"
        alt="youtube logo"
        onClick={onLogoClick}
      />
      <form className={styles.form} onSubmit={onSearchClick}>
        <input className={styles.searchInput} ref={ref} />
        <button className={styles.button}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
    </header>
  );
};

export default SearchHeader;

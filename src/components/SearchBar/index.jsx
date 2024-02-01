import { useState } from "react";
import styles from "./styles.module.css";
import NewAccount from "../NewAccountModal";

const SearchBar = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleNewAccountClick = () => {
    setModalOpen(true);
  };
  return (
    <div className={styles.search}>
      <input
        type="text"
        className={styles.input}
        placeholder="Search objects..."
      />
      <button className={styles.button}>
        <img src={"/assets/search.svg"} alt="search button" />
      </button>
      <button className={styles.filter}>
        <img src={"/assets/filter.svg"} alt="filter button" />
      </button>
      <button className={styles.account} onClick={handleNewAccountClick}>
        + Yeni Hesap Ekle
      </button>
      {isModalOpen && <NewAccount closeModal={() => setModalOpen(false)} />}
    </div>
  );
};

export default SearchBar;

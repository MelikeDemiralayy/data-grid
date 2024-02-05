import { useState } from "react";
import styles from "./styles.module.css";
import NewAccount from "../NewAccountModal";
import { searchSocialMedia } from "../../data/api";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [searchError, setSearchError] = useState(null);

  const handleNewAccountClick = () => {
    setModalOpen(true);
  };

  const handleSearch = async () => {
    const trimmedSearchTerm = searchTerm.trim().toLowerCase();
    console.log("Searching for:", trimmedSearchTerm);

    try {
      const results = await searchSocialMedia(trimmedSearchTerm);
      console.log("Search results:", results);

      setSearchResults(results);
      setSearchError(results.length === 0 ? "No results found" : null);
    } catch (error) {
      console.error("Error while searching:", error);
      setSearchError("Error while searching");
    }
  };

  const displayResults = searchResults.length > 0;

  return (
    <div className={styles.search}>
      <input
        type="text"
        className={styles.input}
        placeholder="Search objects..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className={styles.button} onClick={handleSearch}>
        <img src={"/assets/search.svg"} alt="search button" />
      </button>
      <button className={styles.filter}>
        <img src={"/assets/filter.svg"} alt="filter button" />
      </button>
      <button className={styles.account} onClick={handleNewAccountClick}>
        + Yeni Hesap Ekle
      </button>
      {isModalOpen && <NewAccount closeModal={() => setModalOpen(false)} />}

      {searchError ? (
        <div>{searchError}</div>
      ) : (
        displayResults && (
          <div>
            {searchResults.map((result) => (
              <div key={result.id}>
                <p>Sosyal Medya Adı: {result["Sosyal Medya Adı"]}</p>
                <p>Sosyal Medya Linki: {result["Sosyal Medya Linki"]}</p>
                <p>Açıklama: {result["Açıklama"]}</p>
              </div>
            ))}
          </div>
        )
      )}
    </div>
  );
};

export default SearchBar;

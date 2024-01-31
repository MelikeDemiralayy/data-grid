import { NavbarData } from "../../data/navbar";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src={"/assets/logo.svg"} alt="logo" />
      </div>
      <div className={styles.link}>
        {NavbarData.map((item, index) => {
          return <li key={index}>{item.title}</li>;
        })}
      </div>

      <div className={styles.icons}>
        <img src={"/assets/youtube.svg"} alt="youtube-icon" />
        <img src={"/assets/instagram.svg"} alt="instagram-icon" />
        <img src={"/assets/behance.svg"} alt="behance-icon" />
        <img src={"/assets/linkedin.svg"} alt="linkedin-icon" />
      </div>
    </nav>
  );
};

export default Navbar;
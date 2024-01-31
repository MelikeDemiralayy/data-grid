import PropTypes from "prop-types";
import styles from "./styles.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.layout_container}>
      {children}
    </div>
  );
};

//childeren propunun react ögesi olup zorunlu olmasından dolayı
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
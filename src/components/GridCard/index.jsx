import PropTypes from "prop-types"; 
import styles from "./styles.module.css"

const GridCard = ({children}) => {
  return <div className={styles.container}>{children}</div>;
};
export default GridCard;

GridCard.propTypes = {
    children: PropTypes.node.isRequired,
  };
  

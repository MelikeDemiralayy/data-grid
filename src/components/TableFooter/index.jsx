import styles from "./styles.module.css";
import { useState } from "react";
import PropTypes from "prop-types";

const TableFooter = ({ onRowCountChange }) => {
  const [rowCount, setRowCount] = useState(4);

  const handleRowCountIncrease = () => {
    const newRowCount = rowCount + 1;
    setRowCount(newRowCount);
    onRowCountChange(newRowCount);
  };

  const handleRowCountDecrease = () => {
    if (rowCount > 1) {
      const newRowCount = rowCount - 1;
      setRowCount(newRowCount);
      onRowCountChange(newRowCount);
    }
  };

  return (
    <div className={styles.footer}>
      <div className={styles.leftSection}>
        <label className={styles.label}>Show:</label>
        <div className={styles.showButton}>
          <span id="row1" >{rowCount} rows</span>
          <div className={styles.row}>
            <button
              className={styles.rowControlButton}
              onClick={handleRowCountDecrease}
            >
              <img src={"/assets/down.svg"} alt="down-arrow" />
            </button>
            <button
              className={styles.rowControlButton}
              onClick={handleRowCountIncrease}
            >
              <img src={"/assets/up.svg"} alt="up-arrow" />
            </button>
          </div>
        </div>
      </div>
      <div className={styles.rightSection}>
        <img src={"/assets/left.svg"} alt="left-arrow" />
        <button className={styles.buttonPage}>1</button>
        <label className={styles.label1}>of</label>
        <label className={styles.label2}>4</label>
        <img src={"/assets/right.svg"} alt="right-arrow" />
      </div>
    </div>
  );
};

TableFooter.propTypes = {
  onRowCountChange: PropTypes.func.isRequired,
};

export default TableFooter;

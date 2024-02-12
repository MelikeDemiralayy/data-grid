import PropTypes from "prop-types";
import DataGrid, { Column } from "devextreme-react/data-grid";
import styles from "./style.module.css";

const DataGridTable = ({ socialMediaData, rowCount }) => {
  const columns = ["Sosyal Medya Linki", "Sosyal Medya Adı", "Açıklama"];

  const limitedData = socialMediaData.slice(0, rowCount);

  return (
    <div>
      <DataGrid
        className={styles.table}
        dataSource={limitedData}
        keyExpr="id"
        showBorders={true}
      >
        {columns.map((columnName) => (
          <Column
            key={columnName}
            dataField={
              columnName === "Sosyal Medya Linki"
                ? "Sosyal Medya Linki"
                : columnName === "Sosyal Medya Adı"
                ? "Sosyal Medya Adı"
                : columnName === "Açıklama"
                ? "Açıklma"
                : undefined
            }
            caption={columnName}
          />
        ))}
      </DataGrid>
    </div>
  );
};

DataGridTable.propTypes = {
  socialMediaData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      "Sosyal Medya Linki": PropTypes.string.isRequired,
      "Sosyal Medya Adı": PropTypes.string.isRequired,
      Açıklama: PropTypes.string.isRequired,
    })
  ).isRequired,
  rowCount: PropTypes.number.isRequired,
};

export default DataGridTable;

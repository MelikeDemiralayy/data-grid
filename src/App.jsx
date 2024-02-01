import DataGrid, { Column } from "devextreme-react/data-grid";
import Navbar from "./components/Navbar/Navbar";
import GridCard from "./components/GridCard";
import { useState, useEffect } from "react";
import { fetchSocialMedia } from "./data/api";

const columns = ["SosyalMedyaLinki", "SosyalMedyaAdı", "Açıklama"];

const App = () => {
  const [socialMediaData, setSocialMediaData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchSocialMedia();
        setSocialMediaData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <GridCard>
        <DataGrid dataSource={socialMediaData} keyExpr="id" showBorders={true}>
          {columns.map((columnName) => (
            <Column
              key={columnName}
              dataField={
                columnName === "SosyalMedyaLinki"
                  ? "SosyalMedyaLinki"
                  : columnName === "SosyalMedyaAdı"
                  ? "SosyalMedyaAdı"
                  : columnName === "Açıklama"
                  ? "Açıklma"
                  : undefined
              }
              caption={columnName}
            />
          ))}
        </DataGrid>
      </GridCard>
    </>
  );
};

export default App;

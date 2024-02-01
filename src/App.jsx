import DataGrid, { Column } from "devextreme-react/data-grid";
import Navbar from "./components/Navbar/Navbar";
import GridCard from "./components/GridCard";
import { useState, useEffect } from "react";
import { fetchSocialMedia } from "./data/api";
import SearchBar from "./components/SearchBar";

const columns = ["Sosyal Medya Linki", "Sosyal Medya Adı", "Açıklama"];

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
        <SearchBar />
        <DataGrid dataSource={socialMediaData} keyExpr="id" showBorders={true}>
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
      </GridCard>
    </>
  );
};

export default App;

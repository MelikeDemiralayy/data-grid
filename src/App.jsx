import { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import GridCard from "./components/GridCard";
import { fetchSocialMedia } from "./data/api";
import SearchBar from "./components/SearchBar";
import DataGridTable from "./components/DataGridTable";
import { ToastContainer } from "react-toastify";

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
        <ToastContainer />
        <SearchBar />
        <DataGridTable socialMediaData={socialMediaData} />
      </GridCard>
    </>
  );
};

export default App;

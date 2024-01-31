import DataGrid from "devextreme-react/data-grid";
import { customers } from "./data";
import Navbar from "./components/Navbar/Navbar";
import GridCard from "./components/GridCard";

const columns = ["CompanyName", "City", "State", "Phone", "Fax"];

const App = () => {
  return (
    <>
      <Navbar />
      <GridCard>
        <DataGrid
          dataSource={customers}
          keyExpr="ID"
          defaultColumns={columns}
          showBorders={true}
        />
      </GridCard>
    </>
  );
};

export default App;

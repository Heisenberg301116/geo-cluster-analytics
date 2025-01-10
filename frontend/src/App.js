// src/App.js

import React, { useState } from "react";
import MapComponent from "./components/MapComponent";
import MetricsComponent from "./components/MetricsComponent";
import TableComponent from "./components/TableComponent";
import FilterComponent from "./components/FilterComponent";
import AddClusterComponent from "./components/AddClusterComponent";
import DataProvider from './context/DataProvider'

const App = () => {
  const [filters, setFilters] = useState({
    minUsers: 0,
    minProjects: 0,
  });

  return (
    <DataProvider>
      <div className="app-container p-4">
        <MetricsComponent />
        <AddClusterComponent />
        <FilterComponent setFilters={setFilters} />
        <MapComponent filters={filters} />
        <TableComponent filters={filters} />

      </div>
    </DataProvider>
  );
};

export default App;

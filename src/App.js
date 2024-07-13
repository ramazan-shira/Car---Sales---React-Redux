import React from "react";

import Cars from "./Cars";
import { Route, Routes } from "react-router-dom";
import CarSales from "./CarSales";

const App = () => {
  return (
    <div className="car-sales">
      <Routes>
        <Route path="/" element={<Cars />} />
        <Route path="/car-sales/:id" element={<CarSales />} />
      </Routes>
    </div>
  );
};

export default App;

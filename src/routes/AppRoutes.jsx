import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SuperMarketPricePage from "../pages/Supermarket/SuperMarketPricePage.jsx";
import Header from "../components/common/header/Header";
import StoreManagementPage from "../pages/StoreManagement/StoreManagementPage.jsx";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<SuperMarketPricePage />} />
        <Route path="/store_management" element={<StoreManagementPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;

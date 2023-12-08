import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainPage from "./pages/MainPage";
import StorePage from "./pages/StorePage";
import Product from "./pages/Product";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/store" element={<StorePage />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={null} />
        <Route path="/checkout" element={null} />

        <Route path="/login" element={null} />
        <Route path="/admin/dashboard" element={null} />
        <Route path="/admin/addproduct" element={null} />
        <Route path="/admin/removeproduct" element={null} />
        <Route path="/admin/storesettings" element={null} />
        <Route path="/admin/usersettings" element={null} />
      </Routes>
    </BrowserRouter>
  );
}

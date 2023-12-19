import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/CustomerPages/MainPage";
import StorePage from "./pages/CustomerPages/StorePage";

import CustomerLayout from "./ui/CustomerLayout";

import AdminLayout from "./ui/AdminLayout";
import LoginPage from "./pages/AdminPages/LoginPage";
import DashboardPage from "./pages/AdminPages/DashboardPage";
import AddProductPage from "./pages/AdminPages/AddProductPage";
import RemoveProductPage from "./pages/AdminPages/RemoveProductPage";
import StoreSetingsPage from "./pages/AdminPages/StoreSetingsPage";
import UserSettingsPage from "./pages/AdminPages/UserSettingsPage";
import CartPage from "./pages/CustomerPages/CartPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />

        <Route element={<CustomerLayout />}>
          <Route path="/store" element={<StorePage />} />

          <Route path="/cart" element={<CartPage />} />
        </Route>
        <Route path="/admin/login" element={<LoginPage />} />
        <Route element={<AdminLayout />}>
          <Route path="/admin/dashboard" element={<DashboardPage />} />
          <Route path="/admin/addproduct" element={<AddProductPage />} />
          <Route path="/admin/removeproduct" element={<RemoveProductPage />} />
          <Route path="/admin/storesettings" element={<StoreSetingsPage />} />
          <Route path="/admin/usersettings" element={<UserSettingsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

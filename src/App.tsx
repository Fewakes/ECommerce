import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import StorePage from "./pages/StorePage";
import Product from "./pages/Product";
import AppLayout from "./ui/AppLayouts";
import Cart from "./features/cart/Cart";
import AdminAppLayout from "./ui/AdminAppLayouts";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import AddProduct from "./pages/AddProduct";
import RemoveProduct from "./pages/RemoveProduct";
import StoreSetings from "./pages/StoreSetings";
import UserSettings from "./pages/UserSettings";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />

        <Route element={<AppLayout />}>
          <Route path="/store" element={<StorePage />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
        <Route path="/admin/login" element={<LoginPage />} />
        <Route element={<AdminAppLayout />}>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/addproduct" element={<AddProduct />} />
          <Route path="/admin/removeproduct" element={<RemoveProduct />} />
          <Route path="/admin/storesettings" element={<StoreSetings />} />
          <Route path="/admin/usersettings" element={<UserSettings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

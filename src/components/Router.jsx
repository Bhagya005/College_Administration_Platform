import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import SelectionPage from "../pages/SelectionPage.jsx";
import Login from "../pages/Login.jsx";
export function RouterPaths() {
  
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<SelectionPage />} />

    </Routes>
  );
}


import { Routes, Route } from "react-router-dom";
import SelectionPage from "../pages/SelectionPage.jsx";
import Login from "../pages/Login.jsx";
import StudentDetails from "../pages/StudentDetails.jsx";
export function RouterPaths() {
  
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/studentdetails" element={<StudentDetails />} />
      
      <Route path="/" element={<SelectionPage />} />

    </Routes>
  );
}

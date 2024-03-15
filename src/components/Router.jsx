import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import SelectionPage from "../pages/SelectionPage.jsx";
import Login from "../pages/Login";
import Admin from "../pages/Admin.jsx";
import Student from "../pages/Student.jsx";
import Faculty from "../pages/Faculty.jsx";
import Subject from "../pages/Subject.jsx";
import Attendance from "../pages/Attendance.jsx";
import DailyAttendance from "../pages/DailyAttendance.jsx";
import SubjectAttendance from "../pages/SubjectAttendance.jsx";

export function RouterPaths() {
  
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<SelectionPage />} />
      <Route path="/adminpage" element={<Admin />} />
      <Route path="/student" element={<Student />} />
      <Route path="/faculty" element={<Faculty />} />
      <Route path="/subject" element={<Subject />} />
      <Route path="/attendance" element={<Attendance />} />
      <Route path="/dailyattendance" element={<DailyAttendance />} />
      <Route path="/subjectattendance" element={<SubjectAttendance />} />
    </Routes>
  );
}

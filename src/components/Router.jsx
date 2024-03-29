import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import SelectionPage from "../pages/SelectionPage.jsx";
import Login from "../pages/Login.jsx";
import Admin from "../pages/Admin.jsx";
import Student from "../pages/Student.jsx";
import Faculty from "../pages/Faculty.jsx";
import Subject from "../pages/Subject.jsx";
import Attendance from "../pages/Attendance.jsx";
import DailyAttendance from "../pages/DailyAttendance.jsx";
import SubjectAttendance from "../pages/SubjectAttendance.jsx";
import StudentDetails from "../pages/StudentDetails.jsx";
import FacultyDetails from "../pages/FacultyDetails.jsx";
import Mark from "../pages/Mark.jsx";
import Marks from "../pages/Marks.jsx";
export function RouterPaths() {
  
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<SelectionPage />} />
      <Route path="/adminpage" element={<Admin />} />
      <Route path="/student" element={<Student />} />
      <Route path="/faculty" element={<Faculty />} />
      <Route path="/subject" element={<Subject />} />
      <Route path="/Attendance" element={<Attendance />} />
      <Route path="/dailyattendance" element={<DailyAttendance />} />
      <Route path="/subjectattendance" element={<SubjectAttendance />} />
      <Route path="/studentdetails" element={<StudentDetails />} />
      <Route path="/facultydetails" element={<FacultyDetails />} />
      <Route path="/mark" element={<Mark />} />
      <Route path="/Marks" element={<Marks />} />
    </Routes>
  );
}

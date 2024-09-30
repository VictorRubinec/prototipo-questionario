import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Aluno
const StudentMenu = lazy(() => import("./pages/StudentMenu/index.jsx"));
const Grades = lazy(() => import("./pages/Grades/index.jsx"));
const Exam = lazy(() => import("./pages/Exam/index.jsx"));

// Admin
const DashboardAdmin = lazy(() => import("./pages/DashboardAdmin/index.jsx"));

// School
const DashboardSchool = lazy(() => import("./pages/DashboardSchool/index.jsx"));

// Admin e School
const Register = lazy(() => import("./pages/Register/index.jsx"));

//Global
const Login = lazy(() => import("./pages/Login/index.jsx"));  
const Profile = lazy(() => import("./pages/Profile/index.jsx"));

function Rotas() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="login" element={<Login />} /> 
            <Route path="admin" element={<Login />} /> 
            <Route path="school" element={<Login />} /> 

            <Route index element={<StudentMenu />} /> 
            <Route path="exam/:id/:question" element={<Exam />} /> 
            <Route path="grades" element={<Grades />} />
            
            <Route path="school/dashboard" element={<DashboardSchool />} />
            <Route path="admin/dashboard" element={<DashboardAdmin />} />

            <Route path="register" element={<Register />} />

            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Rotas;

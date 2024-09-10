import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Aluno
const Login = lazy(() => import("./pages/Login/index.jsx"));
const StudentMenu = lazy(() => import("./pages/StudentMenu/index.jsx"));
const Grades = lazy(() => import("./pages/Grades/index.jsx"));
const Question = lazy(() => import("./pages/Question/index.jsx"));
const Exam = lazy(() => import("./pages/Exam/index.jsx"));

// Admin
const LoginAdmin = lazy(() => import("./pages/LoginAdmin/index.jsx"));
const DashboardAdmin = lazy(() => import("./pages/DashboardAdmin/index.jsx"));

// School
const LoginSchool = lazy(() => import("./pages/LoginSchool/index.jsx"));
const DashboardSchool = lazy(() => import("./pages/DashboardSchool/index.jsx"));

// Admin e School
const Register = lazy(() => import("./pages/Register/index.jsx"));

//Global
const Profile = lazy(() => import("./pages/Profile/index.jsx"));

function Rotas() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Login />} /> 
            <Route path="admin" element={<LoginAdmin />} /> 
            <Route path="school" element={<LoginSchool />} /> 

            <Route path="student" element={<StudentMenu />} /> 
            <Route path="student/exam" element={<Exam />} /> 
            <Route path="student/grades" element={<Grades />} />
            <Route path="student/question" element={<Question />} />
            
            <Route path="school/dashboard" element={<DashboardSchool />} />
            <Route path="admin/dashboard" element={<DashboardAdmin />} />

            <Route path=":user/register" element={<Register />} />

            <Route path=":user/profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Rotas;

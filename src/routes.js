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
            {/* <Route index element={<Home />} /> */}
            <Route index element={<Login />} /> {/* Feito */}
            <Route path="login-admin" element={<LoginAdmin />} /> {/* Feito */}
            <Route path="login-school" element={<LoginSchool />} /> {/* Feito */}
            <Route path="register" element={<Register />} />
            <Route path="question" element={<Question />} />
            <Route path="dashboard" element={<DashboardSchool />} />{/* Feito */}
            <Route path="dashboard-admin" element={<DashboardAdmin />} />{/* Feito */}
            <Route path="student-menu" element={<StudentMenu />} /> {/* Feito */}
            <Route path="exam" element={<Exam />} /> {/* Feito */}
            <Route path="grades" element={<Grades />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Rotas;

import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./pages/Home/index.jsx"));

const Login = lazy(() => import("./pages/Login/index.jsx"));
const Register = lazy(() => import("./pages/Register/index.jsx"));

const StudentMenu = lazy(() => import("./pages/StudentMenu/index.jsx"));

const Question = lazy(() => import("./pages/Question/index.jsx"));
const Exam = lazy(() => import("./pages/Exam/index.jsx"));

const Dashboard = lazy(() => import("./pages/Dashboard/index.jsx"));

function Rotas() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="question" element={<Question />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="student-menu" element={<StudentMenu />} />
            <Route path="exam" element={<Exam />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Rotas;

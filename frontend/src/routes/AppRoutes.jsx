import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ProtectedRoute from "../components/ProtectedRoute";
import Dashboard from "../pages/user/Dashboard";
import Courses from "../pages/user/Courses";

import AdminDashboard from "../pages/admin/AdminDashboard";
import AddCourse from "../pages/admin/AddCourse";
import ManageCourses from "../pages/admin/ManageCourses";
function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard/>
          </ProtectedRoute>
        }/>

        <Route
        path="/courses"
        element={
          <ProtectedRoute>
            <Courses/>
          </ProtectedRoute>
        }/>

        <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminDashboard/>
          </ProtectedRoute>
        }/>

        <Route
        path="/admin/add-course"
        element={
          <ProtectedRoute>
            <AddCourse/>
          </ProtectedRoute>
        }/>

        <Route
        path="/admin/courses"
        element={
          <ProtectedRoute>
            <ManageCourses/>
          </ProtectedRoute>

        }/>

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
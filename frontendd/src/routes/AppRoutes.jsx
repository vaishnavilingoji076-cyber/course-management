import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Dashboard from "../pages/user/Dashboard";
import Courses from "../pages/user/Courses";
import CourseDetails from "../pages/user/CourseDetails";
import MyCourses from "../pages/user/MyCourses";
import AdminDashboard from "../pages/admin/AdminDashboard";
import AddCourse from "../pages/admin/AddCourse";
import ManageCourses from "../pages/admin/ManageCourses";
import Students from "../pages/admin/Students";
function AppRoutes() {
  return (
    <BrowserRouter>

      <Routes>

       <Route
        path="/"
        element={<Navigate to="/register" />}
      />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
        path="/course"
        element={<Courses/>}/>

        <Route
        path="/course/:id"
        element={<CourseDetails/>}/>

        <Route
        path="/my-course"
        element={<MyCourses/>}/>

        <Route
        path="/admin"
        element={<AdminDashboard/>}/>

        <Route 
        path="/admin/courses"
        element={<ManageCourses/>}/>

        <Route
        path="/admin/add-course"
        element={<AddCourse/>}/>

        <Route
        path="admin/students"
        element={<Students/>}/>

      </Routes>

    </BrowserRouter>
  );
}

export default AppRoutes;
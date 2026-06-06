import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Dashboard from "../pages/user/Dashboard";
import Courses from "../pages/user/Courses";
import CourseDetails from "../pages/user/CourseDetails";
import MyCourses from "../pages/user/MyCourses";

function AppRoutes() {
  return (
    <BrowserRouter>

      <Routes>

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

      </Routes>

    </BrowserRouter>
  );
}

export default AppRoutes;
import { Link } from "react-router-dom";

import {
  FaHome,
  FaUsers,
  FaBook,
  FaPlus,
  FaSignOutAlt,
} from "react-icons/fa";

function AdminSidebar() {
  return (
    <div className="w-64 h-screen bg-slate-900 text-white flex flex-col">

      <div className="py-6 text-center border-b border-slate-700">
        <h2 className="text-3xl font-bold">
          Admin Panel
        </h2>
      </div>

      <nav className="flex-1 mt-8">

        <Link
          to="/admin"
          className="flex items-center gap-3 px-6 py-4 hover:bg-slate-800"
        >
          <FaHome />
          Dashboard
        </Link>

        <Link
          to="/admin/add-course"
          className="flex items-center gap-3 px-6 py-4 hover:bg-slate-800"
        >
          <FaPlus />
          Add Course
        </Link>

        <Link
          to="/admin/courses"
          className="flex items-center gap-3 px-6 py-4 hover:bg-slate-800"
        >
          <FaBook />
          Manage Courses
        </Link>

        <Link
          to="/admin/students"
          className="flex items-center gap-3 px-6 py-4 hover:bg-slate-800"
        >
          <FaUsers />
          Students
        </Link>

      </nav>

      <button
        className="m-4 bg-red-500 py-3 rounded-lg flex items-center justify-center gap-2"
      >
        <FaSignOutAlt />
        Logout
      </button>

    </div>
  );
}

export default AdminSidebar;
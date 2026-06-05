// import React from "react";
import {
  FaHome,
  FaBook,
  FaUserGraduate,
  FaClipboardList,
  FaSignOutAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 h-screen bg-indigo-700 text-white fixed left-0 top-0 shadow-lg">

      {/* Logo */}
      <div className="text-center py-6 border-b border-indigo-500">
        <h2 className="text-2xl font-bold">LMS</h2>
      </div>

      {/* Navigation */}
      <nav className="mt-8 flex flex-col gap-2 px-4">

        <Link
          to="/dashboard"
          className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-indigo-600 transition"
        >
          <FaHome />
          <span>Dashboard</span>
        </Link>

        <Link
          to="/courses"
          className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-indigo-600 transition"
        >
          <FaBook />
          <span>Courses</span>
        </Link>

        <Link
          to="/students"
          className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-indigo-600 transition"
        >
          <FaUserGraduate />
          <span>Students</span>
        </Link>

        <Link
          to="/manage-courses"
          className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-indigo-600 transition"
        >
          <FaClipboardList />
          <span>Manage Courses</span>
        </Link>

      </nav>

      {/* Logout */}
      <div className="absolute bottom-5 left-0 w-full px-4">
        <button
          className="w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 py-3 rounded-lg transition"
        >
          <FaSignOutAlt />
          Logout
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
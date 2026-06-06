import { Link } from "react-router-dom";
import {
  FaHome,
  FaBook,
  FaUser,
  FaSignOutAlt,
} from "react-icons/fa";

function UserSidebar() {
  return (
    <div className="w-64 h-screen bg-indigo-700 text-white flex flex-col">

      <div className="py-6 text-center border-b border-indigo-500">
        <h2 className="text-3xl font-bold">
          LMS
        </h2>
      </div>

      <nav className="flex-1 mt-8">

        <Link
          to="/dashboard"
          className="flex items-center gap-3 px-6 py-4 hover:bg-indigo-800"
        >
          <FaHome />
          Dashboard
        </Link>

        <Link
          to="/courses"
          className="flex items-center gap-3 px-6 py-4 hover:bg-indigo-800"
        >
          <FaBook />
          Courses
        </Link>

        <Link
          to="/my-courses"
          className="flex items-center gap-3 px-6 py-4 hover:bg-indigo-800"
        >
          <FaBook />
          My Courses
        </Link>

        <Link
          to="/profile"
          className="flex items-center gap-3 px-6 py-4 hover:bg-indigo-800"
        >
          <FaUser />
          Profile
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

export default UserSidebar;
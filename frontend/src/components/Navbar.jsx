import { FaUserCircle } from "react-icons/fa";

function Navbar() {
  return (
    <div className="h-16 bg-white shadow-md flex items-center justify-between px-6">

      <h1 className="text-xl font-bold text-indigo-600">
        Course Management
      </h1>

      <div className="flex items-center gap-3">
        <FaUserCircle size={30} />

        <span className="font-medium">
          Student
        </span>
      </div>
    </div>
  );
}

export default Navbar;
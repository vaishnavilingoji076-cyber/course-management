import { FaUserCircle } from "react-icons/fa";

function Navbar() {

  const user =
    JSON.parse(
      localStorage.getItem("user")
    );

  return (
    <div className="bg-white shadow px-6 py-4 flex justify-end">

      <div className="flex items-center gap-3">

        <FaUserCircle
          size={35}
        />

        <div>

          <p className="font-semibold">
            {user?.name || "User"}
          </p>

          <p className="text-gray-500 text-sm">
            {user?.role || "Student"}
          </p>

        </div>

      </div>

    </div>
  );
}

export default Navbar;
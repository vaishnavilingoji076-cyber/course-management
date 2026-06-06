import UserSidebar from "../components/user/UserSidebar";
import Navbar from "../components/common/Navbar";

function UserLayout({ children }) {
  return (
    <div className="flex h-screen">

      <UserSidebar />

      <div className="flex-1 flex flex-col">

        <Navbar />

        <main className="flex-1 p-6 bg-gray-100 overflow-y-auto">
          {children}
        </main>

      </div>

    </div>
  );
}

export default UserLayout;
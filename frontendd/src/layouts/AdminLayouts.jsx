import AdminSidebar from "../components/admin/AdminSidebar";
import Navbar from "../components/common/Navbar";

function AdminLayout({ children }) {
  return (
    <div className="flex h-screen">

      <AdminSidebar />

      <div className="flex-1 flex flex-col">

        <Navbar />

        <main className="flex-1 p-6 bg-gray-100 overflow-y-auto">
          {children}
        </main>

      </div>

    </div>
  );
}

export default AdminLayout;
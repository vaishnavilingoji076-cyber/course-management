import AdminLayout from "../../layouts/AdminLayouts";
import {
  FaBook,
  FaUsers,
  FaGraduationCap,
} from "react-icons/fa";

import StatCard from "../../components/dashboard/StatCard";

function AdminDashboard() {
  return (
    <AdminLayout>

      <div className="space-y-6">

        <div>
          <h1 className="text-3xl font-bold">
            Admin Dashboard
          </h1>

          <p className="text-gray-500">
            Manage your LMS platform
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">

          <StatCard
            title="Total Courses"
            value="12"
            icon={<FaBook />}
          />

          <StatCard
            title="Students"
            value="150"
            icon={<FaUsers />}
          />

          <StatCard
            title="Enrollments"
            value="75"
            icon={<FaGraduationCap />}
          />

        </div>

      </div>

    </AdminLayout>
  );
}

export default AdminDashboard;
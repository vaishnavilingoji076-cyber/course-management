import UserLayout from "../../layouts/UserLayouts";
import EnrollmentChart
from "../../components/dashboard/EnrollmentChart";
import {
  FaBook,
  FaUsers,
  FaGraduationCap,
  FaCheckCircle,
} from "react-icons/fa";

import StatCard from "../../components/dashboard/StatCard";
import RecentCourses from "../../components/dashboard/RecentCourses";
import RecentStudents from "../../components/dashboard/RecentStudents";

function Dashboard() {
  const user = JSON.parse(
    localStorage.getItem("user")
  );

  return (
    <UserLayout>

      <div className="space-y-6">

        {/* Header */}

        <div>
          <h1 className="text-3xl font-bold">
            Dashboard
          </h1>

          <p className="text-gray-500">
            Welcome back, {user?.name || "Student"} 👋
          </p>
        </div>

        {/* Stats */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

          <StatCard
            title="Total Courses"
            value="12"
            icon={<FaBook />}
          />

          <StatCard
            title="Students"
            value="100"
            icon={<FaUsers />}
          />

          <StatCard
            title="Enrolled"
            value="45"
            icon={<FaGraduationCap />}
          />

          <StatCard
            title="Completed"
            value="10"
            icon={<FaCheckCircle />}
          />

          <EnrollmentChart/>

        </div>

        {/* Quick Actions */}

        <div className="bg-white rounded-xl shadow-md p-6">

          <h2 className="text-xl font-semibold mb-4">
            Quick Actions
          </h2>

          <div className="flex gap-4">

            <button className="bg-indigo-600 text-white px-5 py-3 rounded-lg">
              Browse Courses
            </button>

            <button className="bg-green-600 text-white px-5 py-3 rounded-lg">
              My Courses
            </button>

          </div>

        </div>

        {/* Bottom Section */}

        <div className="grid lg:grid-cols-2 gap-6">

          <RecentCourses />

          <RecentStudents />

        </div>

      </div>

    </UserLayout>
  );
}

export default Dashboard;
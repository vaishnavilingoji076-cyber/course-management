import UserLayout from "../../layouts/UserLayout";

import StatCard from "../../dashboard/StatCard";
import RecentCourses from "../../dashboard/RecentCourse";
import RecentStudents from "../../dashboard/RecentStudent";

function Dashboard() {
  return (
    <UserLayout>

      <div className="space-y-6">

        <div>
          <h1 className="text-3xl font-bold">
            Dashboard
          </h1>

          <p className="text-gray-500">
            Welcome back 👋
          </p>
        </div>

        {/* Stats */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <StatCard
            title="Total Courses"
            value="12"
            color="text-blue-600"
          />

          <StatCard
            title="Enrolled Courses"
            value="5"
            color="text-green-600"
          />

          <StatCard
            title="Completed"
            value="2"
            color="text-purple-600"
          />

        </div>

        {/* Bottom Section */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          <RecentCourses />

          <RecentStudents />

        </div>

      </div>

    </UserLayout>
  );
}

export default Dashboard;
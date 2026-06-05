import UserLayout from "../../layouts/UserLayout";

function Dashboard() {
  return (
    <UserLayout>

      <h1 className="text-3xl font-bold mb-6">
        Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-white p-6 rounded-xl shadow">

          <h3 className="text-gray-500">
            Total Courses
          </h3>

          <p className="text-3xl font-bold text-indigo-600">
            12
          </p>

        </div>

        <div className="bg-white p-6 rounded-xl shadow">

          <h3 className="text-gray-500">
            Enrolled Courses
          </h3>

          <p className="text-3xl font-bold text-green-600">
            5
          </p>

        </div>

        <div className="bg-white p-6 rounded-xl shadow">

          <h3 className="text-gray-500">
            Completed
          </h3>

          <p className="text-3xl font-bold text-purple-600">
            2
          </p>

        </div>

      </div>

    </UserLayout>
  );
}

export default Dashboard;         
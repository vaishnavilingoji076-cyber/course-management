import UserLayout from "../../layouts/UserLayout";

function AdminDashboard() {
  return (
    <UserLayout>
      <h1 className="text-3xl font-bold mb-6">
        Admin Dashboard
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-white p-6 rounded-xl shadow">
          <h3>Total Courses</h3>
          <p className="text-4xl font-bold text-indigo-600">
            15
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3>Total Students</h3>
          <p className="text-4xl font-bold text-green-600">
            100
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3>Enrollments</h3>
          <p className="text-4xl font-bold text-purple-600">
            250
          </p>
        </div>

      </div>
    </UserLayout>
  );
}

export default AdminDashboard;
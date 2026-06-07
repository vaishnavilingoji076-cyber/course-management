import AdminLayout from "../../layouts/AdminLayout";

function ManageCourses() {

  const courses = [
    {
      id: 1,
      title: "MERN Stack",
      duration: "6 Months",
    },
    {
      id: 2,
      title: "Java Full Stack",
      duration: "8 Months",
    },
  ];

  return (
    <AdminLayout>

      <div className="bg-white rounded-xl shadow p-6">

        <h1 className="text-3xl font-bold mb-6">
          Manage Courses
        </h1>

        <table className="w-full">

          <thead>

            <tr className="border-b">

              <th className="text-left py-3">
                Course
              </th>

              <th className="text-left py-3">
                Duration
              </th>

              <th className="text-left py-3">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {courses.map((course) => (
              <tr
                key={course.id}
                className="border-b"
              >

                <td className="py-3">
                  {course.title}
                </td>

                <td>
                  {course.duration}
                </td>

                <td className="space-x-2">

                  <button
                    className="bg-yellow-500 text-white px-3 py-1 rounded"
                  >
                    Edit
                  </button>

                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>

                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </AdminLayout>
  );
}

export default ManageCourses;
import AdminLayout from "../../layouts/AdminLayouts";

function Students() {

  const students = [
    {
      id: 1,
      name: "Rahul Sharma",
      email: "rahul@gmail.com",
    },
    {
      id: 2,
      name: "Priya Patel",
      email: "priya@gmail.com",
    },
  ];

  return (
    <AdminLayout>

      <div className="bg-white rounded-xl shadow p-6">

        <h1 className="text-3xl font-bold mb-6">
          Students
        </h1>

        <table className="w-full">

          <thead>

            <tr className="border-b">

              <th className="text-left py-3">
                Name
              </th>

              <th className="text-left py-3">
                Email
              </th>

            </tr>

          </thead>

          <tbody>

            {students.map((student) => (
              <tr
                key={student.id}
                className="border-b"
              >

                <td className="py-3">
                  {student.name}
                </td>

                <td>
                  {student.email}
                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </AdminLayout>
  );
}

export default Students;
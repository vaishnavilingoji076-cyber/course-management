function RecentStudents() {
  const students = [
    "John Doe",
    "Alex Smith",
    "David",
    "Rahul",
  ];

  return (
    <div className="bg-white rounded-2xl shadow-md p-6">

      <h2 className="text-xl font-semibold mb-4">
        Recent Students
      </h2>

      <div className="space-y-3">

        {students.map((student, index) => (
          <div
            key={index}
            className="border-b pb-2"
          >
            {student}
          </div>
        ))}

      </div>

    </div>
  );
}

export default RecentStudents;
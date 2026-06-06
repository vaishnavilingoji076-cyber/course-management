function RecentStudents() {
  const students = [
    "Rahul Sharma",
    "Priya Patel",
    "Amit Kumar",
    "Neha Singh",
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-6">

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
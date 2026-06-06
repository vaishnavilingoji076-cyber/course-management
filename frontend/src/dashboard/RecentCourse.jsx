function RecentCourses() {
  const courses = [
    {
      name: "MERN Stack",
      duration: "6 Months",
      fees: "25000",
    },
    {
      name: "Java Full Stack",
      duration: "8 Months",
      fees: "30000",
    },
    {
      name: "Python",
      duration: "4 Months",
      fees: "18000",
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-md p-6">

      <h2 className="text-xl font-semibold mb-4">
        Recent Courses
      </h2>

      <div className="space-y-4">

        {courses.map((course, index) => (
          <div
            key={index}
            className="flex justify-between border-b pb-3"
          >
            <div>
              <p className="font-medium">
                {course.name}
              </p>

              <p className="text-gray-500 text-sm">
                {course.duration}
              </p>
            </div>

            <p className="font-semibold">
              ₹{course.fees}
            </p>
          </div>
        ))}

      </div>

    </div>
  );
}

export default RecentCourses;
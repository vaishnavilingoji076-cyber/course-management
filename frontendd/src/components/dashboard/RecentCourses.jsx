function RecentCourses() {
  const courses = [
    {
      name: "MERN Stack",
      duration: "6 Months",
    },
    {
      name: "Java Full Stack",
      duration: "8 Months",
    },
    {
      name: "Python Development",
      duration: "4 Months",
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-6">

      <h2 className="text-xl font-semibold mb-4">
        Recent Courses
      </h2>

      <div className="space-y-4">

        {courses.map((course, index) => (
          <div
            key={index}
            className="border-b pb-3"
          >
            <h3 className="font-medium">
              {course.name}
            </h3>

            <p className="text-gray-500 text-sm">
              {course.duration}
            </p>
          </div>
        ))}

      </div>

    </div>
  );
}

export default RecentCourses;
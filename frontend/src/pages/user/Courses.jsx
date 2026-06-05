import UserLayout from "../../layouts/UserLayout";

function Courses() {
  const courses = [
    {
      id: 1,
      name: "MERN Stack",
      duration: "6 Months",
      fees: "25000",
    },
    {
      id: 2,
      name: "Java Full Stack",
      duration: "8 Months",
      fees: "30000",
    },
  ];

  return (
    <UserLayout>

      <h1 className="text-3xl font-bold mb-6">
        Courses
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white shadow rounded-xl p-5"
          >
            <h2 className="text-xl font-bold">
              {course.name}
            </h2>

            <p className="mt-2">
              Duration: {course.duration}
            </p>

            <p>
              Fees: ₹{course.fees}
            </p>

            <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700">
              Enroll Now
            </button>
          </div>
        ))}

      </div>

    </UserLayout>
  );
}

export default Courses;
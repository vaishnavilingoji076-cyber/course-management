import UserLayout from "../../layouts/UserLayout";

function MyCourses() {

  const enrolledCourses = [
    {
      id: 1,
      title: "MERN Stack",
    },
    {
      id: 2,
      title: "Java Full Stack",
    },
  ];

  return (
    <UserLayout>

      <h1 className="text-3xl font-bold mb-6">
        My Courses
      </h1>

      <div className="grid md:grid-cols-2 gap-6">

        {enrolledCourses.map(
          (course) => (
            <div
              key={course.id}
              className="bg-white p-6 rounded-xl shadow"
            >
              <h2 className="text-xl font-semibold">
                {course.title}
              </h2>
            </div>
          )
        )}

      </div>

    </UserLayout>
  );
}

export default MyCourses;
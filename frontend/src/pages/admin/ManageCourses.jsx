import { useEffect, useState } from "react";
import { getCourses, deleteCourse } from "../../sevices/courseService";
import UserLayout from "../../layouts/UserLayout";
// import courseService from "../../sevices/courseService";
function ManageCourses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCourses = async () => {
    try {
      setLoading(true);

      const res = await getCourses();

      console.log("API Response:", res.data);

      // Adjust according to your API response
      setCourses(res.data.data || res.data || []);
    } catch (error) {
      console.error("Error fetching courses:", error);
      setCourses([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this course?"
    );

    if (!confirmDelete) return;

    try {
      await deleteCourse(id);

      setCourses((prev) =>
        prev.filter((course) => course._id !== id)
      );

      alert("Course deleted successfully");
    } catch (error) {
      console.error("Delete Error:", error);
      alert("Failed to delete course");
    }
  };

  return (
    <UserLayout>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">
          Manage Courses
        </h1>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {loading ? (
            <div className="p-6 text-center">
              Loading courses...
            </div>
          ) : courses.length === 0 ? (
            <div className="p-6 text-center text-gray-500">
              No Courses Found
            </div>
          ) : (
            <table className="w-full">
              <thead className="bg-indigo-600 text-white">
                <tr>
                  <th className="p-4 text-left">
                    Course Name
                  </th>
                  <th className="p-4 text-left">
                    Duration
                  </th>
                  <th className="p-4 text-left">
                    Fees
                  </th>
                  <th className="p-4 text-center">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody>
                {courses.map((course) => (
                  <tr
                    key={course._id}
                    className="border-b hover:bg-gray-50"
                  >
                    <td className="p-4">
                      {course.name}
                    </td>

                    <td className="p-4">
                      {course.duration}
                    </td>

                    <td className="p-4">
                      ₹{course.fees}
                    </td>

                    <td className="p-4 text-center">
                      <button
                        onClick={() =>
                          handleDelete(course._id)
                        }
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </UserLayout>
  );
}

export default ManageCourses;
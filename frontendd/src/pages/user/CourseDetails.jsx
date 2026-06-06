import { useParams } from "react-router-dom";
import UserLayout from "../../layouts/UserLayout";

function CourseDetails() {
  const { id } = useParams();

  const course = {
    _id: id,
    title: "MERN Stack Development",
    description:
      "Learn MongoDB, Express, React and Node.js from scratch.",
    duration: "6 Months",
    fees: 25000,
    instructor: "John Doe",
  };

  return (
    <UserLayout>
      <div className="bg-white rounded-xl shadow-md p-8">
        {/* Course Header */}
        <div className="mb-6">
          <h1 className="text-4xl font-bold text-gray-800">
            {course.title}
          </h1>

          <p className="text-gray-600 mt-3">
            {course.description}
          </p>
        </div>

        {/* Course Information */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-gray-700">
              Duration
            </h3>
            <p>{course.duration}</p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-700">
              Fees
            </h3>
            <p>₹{course.fees}</p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-700">
              Instructor
            </h3>
            <p>{course.instructor}</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap gap-4">
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition">
            Enroll Now
          </button>

          <button className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-300 transition">
            Save For Later
          </button>
        </div>
      </div>
    </UserLayout>
  );
}

export default CourseDetails;
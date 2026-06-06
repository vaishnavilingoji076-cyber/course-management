import { Link } from "react-router-dom";

function CourseCard({ course }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">

      <div className="h-40 bg-indigo-600 flex items-center justify-center">

        <h2 className="text-white text-2xl font-bold">
          {course.title}
        </h2>

      </div>

      <div className="p-5">

        <p className="text-gray-600 mb-3">
          {course.description}
        </p>

        <div className="space-y-2">

          <p>
            <span className="font-semibold">
              Duration:
            </span>{" "}
            {course.duration}
          </p>

          <p>
            <span className="font-semibold">
              Fees:
            </span>{" "}
            ₹{course.fees}
          </p>

        </div>

        <Link
          to={`/courses/${course._id}`}
          className="block mt-5 bg-indigo-600 text-white text-center py-2 rounded-lg hover:bg-indigo-700"
        >
          View Details
        </Link>

      </div>

    </div>
  );
}

export default CourseCard;
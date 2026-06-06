import { useState } from "react";

import UserLayout from "../../layouts/UserLayout";

import CourseCard from "../../components/course/CourseCard";
import CourseSearch from "../../components/course/CourseSearch";

function Courses() {

  const [search, setSearch] =
    useState("");

  const courses = [
    {
      _id: 1,
      title: "MERN Stack",
      description:
        "Full Stack Web Development",
      duration: "6 Months",
      fees: 25000,
    },
    {
      _id: 2,
      title: "Java Full Stack",
      description:
        "Java + Spring Boot",
      duration: "8 Months",
      fees: 30000,
    },
    {
      _id: 3,
      title: "Python Development",
      description:
        "Python + Django",
      duration: "4 Months",
      fees: 18000,
    },
  ];

  const filteredCourses =
    courses.filter((course) =>
      course.title
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  return (
    <UserLayout>

      <div className="space-y-6">

        <div>

          <h1 className="text-3xl font-bold">
            Courses
          </h1>

          <p className="text-gray-500">
            Explore available courses
          </p>

        </div>

        <CourseSearch
          search={search}
          setSearch={setSearch}
        />

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

          {filteredCourses.map(
            (course) => (
              <CourseCard
                key={course._id}
                course={course}
              />
            )
          )}

        </div>

      </div>

    </UserLayout>
  );
}

export default Courses;
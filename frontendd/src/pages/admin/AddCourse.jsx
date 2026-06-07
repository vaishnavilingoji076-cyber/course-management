import { useState } from "react";
import AdminLayout from "../../layouts/AdminLayout";

function AddCourse() {

  const [course, setCourse] =
    useState({
      title: "",
      description: "",
      duration: "",
      fees: "",
    });

  const handleChange = (e) => {
    setCourse({
      ...course,
      [e.target.name]:
      e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(course);

    alert("Course Added");
  };

  return (
    <AdminLayout>

      <div className="bg-white p-8 rounded-xl shadow">

        <h1 className="text-3xl font-bold mb-6">
          Add Course
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >

          <input
            type="text"
            name="title"
            placeholder="Course Title"
            className="w-full border p-3 rounded"
            onChange={handleChange}
          />

          <textarea
            name="description"
            placeholder="Description"
            className="w-full border p-3 rounded"
            onChange={handleChange}
          />

          <input
            type="text"
            name="duration"
            placeholder="Duration"
            className="w-full border p-3 rounded"
            onChange={handleChange}
          />

          <input
            type="number"
            name="fees"
            placeholder="Fees"
            className="w-full border p-3 rounded"
            onChange={handleChange}
          />

          <button
            className="bg-indigo-600 text-white px-6 py-3 rounded"
          >
            Add Course
          </button>

        </form>

      </div>

    </AdminLayout>
  );
}

export default AddCourse;
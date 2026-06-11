import { useState } from "react";

import {
  registerUser,
} from "../../services/authService";

function Register() {

  const [formData,
    setFormData] =
    useState({
      firstName: "",
  lastName: "",
  email: "",
  password: "",
    });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]:
      e.target.value,
    });

  };

  const handleSubmit =
    async (e) => {

      e.preventDefault();

      try {

        await registerUser(
          formData
        );

        alert(
          "Registration Successful"
        );

      } catch (error) {

        console.log(error);

      }
    };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow w-[400px]"
      >

        <h1 className="text-3xl font-bold mb-6">
          Register
        </h1>

        <input
          type="text"
          name="firstName"
          placeholder="firstName"
          className="w-full border p-3 mb-4 rounded"
          onChange={handleChange}
        />

        <input 
        type="text"
        name="lastName"
        placeholder="lastname"
        className="w-full border p-3 mb-4 rounded"
        onChange={handleChange}/>

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full border p-3 mb-4 rounded"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full border p-3 mb-4 rounded"
          onChange={handleChange}
        />

        <button
          className="w-full bg-indigo-600 text-white py-3 rounded"
        >
          Register
        </button>

      </form>

    </div>
  );
}

export default Register;
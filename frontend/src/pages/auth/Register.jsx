import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGraduationCap } from "react-icons/fa";
import API from "../../sevices/api";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post(
        "/auth/register",
        formData
      );

      alert("Registration Successful");

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center p-4">

      <div className="bg-white/20 backdrop-blur-lg rounded-3xl shadow-xl p-8 w-full max-w-md">

        <div className="text-center mb-8">
          <FaGraduationCap
            className="mx-auto text-white text-5xl"
          />

          <h1 className="text-3xl font-bold text-white mt-3">
            Create Account
          </h1>
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="w-full p-3 rounded-xl mb-3"
            onChange={handleChange}
          />

          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="w-full p-3 rounded-xl mb-3"
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-3 rounded-xl mb-3"
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-3 rounded-xl mb-3"
            onChange={handleChange}
          />

          <button
            className="w-full bg-indigo-700 text-white py-3 rounded-xl mt-2 hover:bg-indigo-800"
          >
            Register
          </button>
        </form>

        <p className="text-center text-white mt-4">
          Already have an account?{" "}
          <Link
            to="/"
            className="font-bold"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
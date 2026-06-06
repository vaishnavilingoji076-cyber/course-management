import {
  useState,
} from "react";

import {
  loginUser,
} from "../../services/authService";

import {
  useNavigate,
} from "react-router-dom";

import {
  useAuth,
} from "../../context/AuthContext";

function Login() {

  const navigate =
    useNavigate();

  const { login } =
    useAuth();

  const [formData,
    setFormData] =
    useState({
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

        const res =
          await loginUser(
            formData
          );

        login(
          res.data.user,
          res.data.token
        );

        navigate(
          "/dashboard"
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
          Login
        </h1>

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
          Login
        </button>

      </form>

    </div>
  );
}

export default Login;
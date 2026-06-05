import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaGraduationCap } from "react-icons/fa";
import API from "../../sevices/api";

function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
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
      const res = await API.post(
        "/auth/login",
        formData
      );

      localStorage.setItem(
        "token",
        res.data.token
      );

      navigate("/dashboard");
    } catch (error) {
      alert("Invalid Credentials");
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center p-4">
      <div className="bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl p-8 w-full max-w-md">

        <div className="text-center mb-8">
          <FaGraduationCap
            className="mx-auto text-white text-5xl"
          />

          <h1 className="text-3xl font-bold text-white mt-3">
            Course Management
          </h1>

          <p className="text-white mt-2">
            Login to continue
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            className="w-full p-3 rounded-xl mb-4 bg-white border outline-none"
            onChange={handleChange}
          />

          <div className="relative">
            <input
              type={
                showPassword ? "text" : "password"
              }
              name="password"
              placeholder="Enter Password"
              className="w-full p-3 rounded-xl bg-white border outline-none"
              onChange={handleChange}
            />

            <button
              type="button"
              className="absolute right-4 top-4"
              onClick={() =>
                setShowPassword(!showPassword)
              }
            >
              {showPassword ? (
                <FaEyeSlash />
              ) : (
                <FaEye />
              )}
            </button>
          </div>

          <button
            className="w-full bg-indigo-700 text-white py-3 rounded-xl mt-6 hover:bg-indigo-800 transition"
          >
            Login
          </button>
        </form>

        <p className="text-center text-white mt-5">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="font-bold"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
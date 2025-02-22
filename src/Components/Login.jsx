import { useState } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/Store";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.auth.currentUser);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  if (currentUser) {
    navigate("/Home");
  }

  const key = import.meta.env.API_KEY;
  console.log(key);
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-500 p-4 sm:p-6">
    <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-2xl max-w-xs sm:max-w-sm w-full transform transition duration-500 hover:scale-105 animate-fade-in">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800">Welcome Back!</h2>
      <p className="text-center text-gray-500 mb-4 sm:mb-6">Login to your account</p>
      
      <form onSubmit={handleSubmit} className="mt-4 sm:mt-6">
        <div className="mb-3 sm:mb-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-400 transition-shadow"
          />
        </div>
        <div className="mb-3 sm:mb-4">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-400 transition-shadow"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 sm:py-3 rounded-lg hover:bg-blue-600 transform transition duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
        >
          Login
        </button>
      </form>
      
      <p className="text-center text-xs sm:text-sm text-gray-600 mt-3 sm:mt-4">
        Don't have an account? <Link to="/signup" className="text-blue-500 hover:text-blue-700 transition-colors">Sign up</Link>
      </p>
    </div>
  </div>
      );
    }


export default Login;

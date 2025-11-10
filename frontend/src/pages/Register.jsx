import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { UserContext } from "../context/UserContext";
import api from "../utils/axiosConfig";
import { PiggyBank, BarChart3, TrendingUp } from "lucide-react";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { loginUser } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await api.post("/user/register", { username, email, password });
      if (res.data.success) {
        loginUser(res.data.user);
        navigate("/dashboard");
      } else setError(res.data.message || "Registration failed");
    } catch (err) {
      setError(err.response?.data?.message || "Error registering");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-pink-500 to-indigo-500 text-white px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-5xl bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden"
      >
        {/* LEFT SIDE (Visual) */}
        <div className="md:w-1/2 flex flex-col justify-center items-center text-center p-10 bg-gradient-to-br from-pink-600 to-purple-700 text-white">
          <h2 className="text-4xl font-extrabold mb-3">Create Your Account</h2>
          <p className="text-pink-100 mb-10 max-w-sm">
            Join PaisaGraph today — your smart finance companion to manage money
            and grow your savings.
          </p>

          {/* Floating Icons */}
          <div className="flex gap-10">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="bg-white text-pink-600 p-4 rounded-full shadow-lg"
            >
              <PiggyBank size={32} />
            </motion.div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, delay: 0.4 }}
              className="bg-white text-pink-600 p-4 rounded-full shadow-lg"
            >
              <BarChart3 size={32} />
            </motion.div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, delay: 0.8 }}
              className="bg-white text-pink-600 p-4 rounded-full shadow-lg"
            >
              <TrendingUp size={32} />
            </motion.div>
          </div>
        </div>

        {/* RIGHT SIDE (Form) */}
        <div className="md:w-1/2 p-10 bg-white flex flex-col justify-center text-gray-800">
          <h2 className="text-3xl font-bold text-center mb-6 text-pink-700">
            Register on PaisaGraph
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold mb-1 text-pink-700">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full p-3 rounded-xl border-2 border-pink-200 bg-pink-50 focus:bg-white focus:ring-2 focus:ring-pink-500 outline-none transition-all"
                placeholder="Enter username"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1 text-pink-700">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-3 rounded-xl border-2 border-pink-200 bg-pink-50 focus:bg-white focus:ring-2 focus:ring-pink-500 outline-none transition-all"
                placeholder="Enter email"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1 text-pink-700">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPass ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full p-3 rounded-xl border-2 border-pink-200 bg-pink-50 focus:bg-white focus:ring-2 focus:ring-pink-500 outline-none transition-all"
                  placeholder="Enter password"
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-4 top-3 text-gray-400 hover:text-pink-600"
                >
                  {showPass ? "🙈" : "👁️"}
                </button>
              </div>
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-pink-600 to-purple-600 text-white font-semibold shadow-md hover:scale-[1.03] transition-transform"
            >
              Create Account
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-6">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-pink-600 font-medium hover:underline"
            >
              Sign in
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}

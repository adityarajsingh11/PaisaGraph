import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="animated-gradient min-h-screen flex items-center justify-center px-4 py-8 relative overflow-hidden">
      {/* Floating Blobs */}
      <div className="fixed top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-bounce" />
      <div className="fixed bottom-20 right-10 w-40 h-40 bg-purple-300/20 rounded-full blur-3xl animate-pulse" />
      <div className="fixed top-1/2 right-1/4 w-24 h-24 bg-blue-300/20 rounded-full blur-3xl animate-bounce" />

      {/* Card */}
      <div className="w-full max-w-md bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-8 sm:p-10 relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"/>
            </svg>
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Create Account
          </h1>
          <p className="text-gray-500 text-sm mt-1">Join us to track your finances</p>
        </div>

        {/* Form */}
        <form action="/api/user/register" method="POST" className="space-y-5">
          <div>
            <label className="block mb-1 text-sm font-semibold text-gray-700">Username</label>
            <input
              type="text"
              name="username"
              placeholder="johndoe"
              required
              className="w-full p-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-semibold text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              placeholder="john.doe@example.com"
              required
              className="w-full p-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-semibold text-gray-700">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="••••••••"
                required
                minLength="6"
                className="w-full p-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-1">Minimum 6 characters</p>
          </div>

          <div className="flex items-center">
            <input type="checkbox" id="terms" required className="w-4 h-4 mr-2 accent-blue-600" />
            <label htmlFor="terms" className="text-sm text-gray-600">
              I agree to the <a href="#" className="text-blue-600 hover:underline">Terms</a>
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-3 text-white font-semibold rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-[1.02] transition-all"
          >
            Create Account
          </button>

          <div className="flex justify-center items-center my-4">
            <div className="border-t w-full border-gray-300" />
            <span className="px-3 text-xs text-gray-500">OR</span>
            <div className="border-t w-full border-gray-300" />
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              className="border-2 border-gray-200 rounded-xl py-2 hover:bg-gray-100 text-sm font-medium"
            >
              Google
            </button>
            <button
              type="button"
              className="border-2 border-gray-200 rounded-xl py-2 hover:bg-gray-100 text-sm font-medium"
            >
              GitHub
            </button>
          </div>

          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account?
            <Link to="/login" className="text-blue-600 hover:underline ml-1">Sign in</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;

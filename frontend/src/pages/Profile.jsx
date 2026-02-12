


import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { motion } from "framer-motion";
import { User, Mail, LogOut } from "lucide-react";

const Profile = () => {
  const { user, logoutUser } = useContext(UserContext);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center p-6">
      
      {/* Profile Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md p-8 rounded-3xl backdrop-blur-xl bg-white/20 shadow-2xl border border-white/30 text-center text-white"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 120 }}
          className="mx-auto w-28 h-28 rounded-full bg-white/30 flex items-center justify-center shadow-lg mb-4"
        >
          <User size={50} className="text-white" />
        </motion.div>

        <h1 className="text-3xl font-bold mb-2 tracking-wide">
          {user?.username || "User"}
        </h1>

        <p className="text-indigo-200 mb-6 text-sm">
          Manage your account & preferences
        </p>

        {/* User Info */}
        <div className="bg-white/20 rounded-xl p-4 text-left space-y-3 border border-white/20">
          <div className="flex items-center gap-3">
            <User className="text-yellow-300" size={20} />
            <span className="text-white text-lg">{user?.username}</span>
          </div>

          <div className="flex items-center gap-3">
            <Mail className="text-green-300" size={20} />
            <span className="text-white text-lg">{user?.email || "Not available"}</span>
          </div>
        </div>

        {/* Logout Button */}
        <motion.button
          onClick={logoutUser}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 w-full bg-white text-indigo-700 font-semibold py-3 rounded-full shadow-lg 
                     hover:bg-indigo-100 transition flex items-center justify-center gap-2"
        >
          <LogOut size={20} /> Logout
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Profile;

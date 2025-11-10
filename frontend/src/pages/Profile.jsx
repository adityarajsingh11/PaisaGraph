import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Profile = () => {
  const { user, logoutUser } = useContext(UserContext);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-lg w-96 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">User Profile</h1>

        {user ? (
          <>
            <p className="text-gray-600 mb-2">
              <strong>Username:</strong> {user.username}
            </p>
            <p className="text-gray-600 mb-6">
              <strong>Email:</strong> {user.email || "Not available"}
            </p>

            {/* ✅ Logout Button here */}
            <button
              onClick={logoutUser}
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition w-full"
            >
              Logout
            </button>
          </>
        ) : (
          <p className="text-gray-500">No user data found.</p>
        )}
      </div>
    </div>
  );
};

export default Profile;

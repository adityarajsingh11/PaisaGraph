import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Link } from "react-router-dom";

function Header() {
  const { user } = useContext(UserContext);

  return (
    <header className="bg-indigo-600 text-white px-6 py-3 flex justify-between items-center shadow-md rounded-xl">
      <h1 className="text-xl font-semibold">PaisaGraph</h1>
      {user && (
        <div className="flex items-center gap-4">
          <span className="font-medium">Hi, {user.username}</span>

          {/* 👇 Add Profile link instead of logout */}
          <Link
            to="/profile"
            className="bg-white text-indigo-600 px-3 py-1 rounded-lg hover:bg-indigo-100 transition"
          >
            Profile
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;

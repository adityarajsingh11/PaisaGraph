import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Link } from "react-router-dom";
import { User } from "lucide-react";

function Header() {
  const { user } = useContext(UserContext);

  return (
    <header
      className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500
                 text-white px-6 py-4 shadow-lg backdrop-blur-md
                 flex items-center justify-between"
    >
      {/* Logo */}
      <h1 className="text-2xl font-extrabold tracking-wide">
        💰 PaisaGraph
      </h1>

      {/* Right Section */}
      {user && (
        <div className="flex items-center gap-4">

          {/* Username Bubble */}
          <span className="px-4 py-1.5 rounded-full bg-white/20 
                           text-white font-semibold tracking-wide shadow">
            Hi, {user.username}
          </span>

          {/* Profile Button */}
          <Link
            to="/profile"
            className="flex items-center gap-2 bg-white text-indigo-700 
                       px-4 py-2 rounded-full font-semibold shadow-lg 
                       hover:bg-yellow-100 transition-all hover:scale-105"
          >
            <User size={18} />
            Profile
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;

import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Header() {
  const { user, logout } = useContext(UserContext);

  return (
    <header className="bg-indigo-600 text-white px-6 py-3 flex justify-between items-center shadow-md rounded-xl">
      <h1 className="text-xl font-semibold">PaisaGraph</h1>
      {user && (
        <div className="flex items-center gap-4">
          <span className="font-medium">Hi, {user.username}</span>
          <button
            onClick={logout}
            className="bg-white text-indigo-600 px-3 py-1 rounded-lg hover:bg-indigo-100 transition"
          >
            Logout
          </button>
        </div>
      )}
    </header>
  );
}
export default Header;

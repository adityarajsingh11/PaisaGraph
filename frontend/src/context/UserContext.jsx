import { createContext, useState, useEffect } from "react";

export const UserContext = createContext(); // ✅ Named export

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Optionally load user from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

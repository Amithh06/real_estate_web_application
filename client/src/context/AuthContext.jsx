import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();
const getUserFromLocalStorage = () => {
  try {
    const item =  localStorage.getItem("user");
    return item ? JSON.parse(item) : null;
  } catch (error) {
    console.error("Failed to parse user from localStorage:", error);
    return null;
  }
};
export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(getUserFromLocalStorage
  );

  const updateUser = (data) => {
    setCurrentUser(data);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser,updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};

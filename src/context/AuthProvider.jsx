import React, { createContext, useEffect, useState } from "react";
import { admin, getLocalStorage, setLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  // localStorage.clear();
  const [userData, setUserData] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const { employees, admin } = getLocalStorage();
    setUserData(employees);
    if (admin) {
      setCurrentUser(admin);
    }
  }, []);

  const updateUserData = (newData) => {
    setUserData(newData); // Update context state
    // Update localStorage
    setLocalStorage(newData, currentUser);

    if (currentUser && currentUser.id) {
      const updatedCurrentUser = newData.find(
        (user) => user.id === currentUser.id
      );
      if (updatedCurrentUser) {
        setCurrentUser(updatedCurrentUser);
      }
    }
    console.log("Updated userData in localStorage:", newData); // Log to verify
  };

  const login = (user) => {
    setCurrentUser(user);
    setLocalStorage(userData, user);
  };

  const logout = () => {
    setCurrentUser(null);
    setLocalStorage(userData, null);
  };

  const employeeId = currentUser?.id;

  return (
    <div>
      <AuthContext.Provider
        value={{
          userData,
          setUserData,
          updateUserData,
          currentUser,
          login,
          logout,
          employeeId,
        }}
      >
        {children}
      </AuthContext.Provider>
    </div>
  );
}

export function useAuth() {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

import React, { createContext, useEffect, useState } from "react";
import { admin, getLocalStorage, setLocalStorage } from "../utils/localStorage";
export const AuthContext = createContext();

export function AuthProvider({ children }) {
  // localStorage.clear();
  const [userData, setUserData] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    // sample data for testing only
    const sampleData = [
      {
        id: "1",
        firstName: "John",
        lastName: "Doe",
        email: "john@example.com",
        password: "password123",
        role: "employee",
        tasks: [],
        taskCount: { newTask: 0, active: 0, completed: 0, failed: 0 },
      },
      {
        id: "2",
        firstName: "Jane",
        lastName: "Smith",
        email: "jane@example.com",
        password: "password456",
        role: "employee",
        tasks: [],
        taskCount: { newTask: 0, active: 0, completed: 0, failed: 0 },
      },
      {
        id: "3",
        firstName: "Admin",
        lastName: "User",
        email: "admin@me.com",
        password: "123",
        role: "admin",
      },
    ];

    const { employees } = getLocalStorage();

    // const storedEmployees = JSON.parse(localStorage.getItem('employees')) || sampleData;
    // setUserData(storedEmployees);

    const storedData = employees;
    // console.log(storedData , 'stored')
    if (storedData) {
      setUserData(storedData);
    } else {
      setLocalStorage("employees", sampleData); // Store sample data
      setUserData(sampleData);
    }

    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
      setCurrentUser(loggedInUser);
    }
  }, []);

  const updateUserData = (newData) => {
    try {
      setUserData([...newData]); // Update context state

      // Update localStorage
      setLocalStorage(newData, admin);
      console.log("Updated userData in localStorage:", newData); // Log to verify
    } catch (error) {
      console.error("Failed to update user data:", error);
    }
  };

  const login = (user) => {
    setCurrentUser(user);
    localStorage.setItem("loggedInUser", JSON.stringify(user));
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem("loggedInUser");
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

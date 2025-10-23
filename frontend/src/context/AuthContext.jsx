// src/context/AuthContext.jsx
import { createContext, useContext, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // ✅ pastikan terima dalam bentuk object { email, password }
  const login = async ({ email, password }) => {
    const res = await axios.post("http://localhost:5000/api/auth/login", {
      email,
      password,
    });
    setUser(res.data.user);
  };

  // ✅ register juga object { username, email, password }
  const register = async ({ username, email, password }) => {
    const res = await axios.post("http://localhost:5000/api/auth/register", {
      username,
      email,
      password,
    });
    setUser(res.data.user);
  };

  const logout = async () => {
    await axios.post("http://localhost:5000/api/auth/logout");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

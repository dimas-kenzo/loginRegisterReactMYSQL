import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  useEffect(() => {
    if (!user && !isLoggingOut) {
      navigate("/", { replace: true });
    }
  }, [user, navigate, isLoggingOut]);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    await logout();
    navigate("/", { replace: true });
  };

  // Jangan render isi dashboard saat proses logout sedang berjalan
  if (isLoggingOut) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
        <div className="spinner-border text-danger" role="status">
          <span className="visually-hidden">Logging out...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="card shadow p-4">
        <h2 className="text-center mb-4">Welcome to Your Dashboard</h2>
        {user ? (
          <>
            <h5 className="text-center mb-3">
              Hello, <strong>{user.username}</strong> 👋
            </h5>
            <div className="text-center mt-4">
              <button className="btn btn-danger" onClick={handleLogout}>
                Logout
              </button>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}

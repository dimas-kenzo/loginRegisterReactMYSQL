import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  // Saat masih memeriksa session, jangan tampilkan apa-apa (biar tidak flicker)
  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  // Jika tidak ada user, arahkan ke login
  if (!user) {
    return <Navigate to="/" replace />;
  }

  // Jika user ada, tampilkan konten aslinya
  return children;
}

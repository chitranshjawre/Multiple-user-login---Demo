import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import React from "react";

const PrivateRoute = ({ children }) => {
  const currentUser = useSelector((state) => state.auth.currentUser);
  return currentUser ? children : <Navigate to="/login" />;
};

export default PrivateRoute;

import React from "react";
import { Navigate } from "react-router-dom";

const RouteWithAuth = (props) => {
  const { children } = props;
  return localStorage.getItem("token") ? children : <Navigate to="/" />;
};

export default RouteWithAuth;
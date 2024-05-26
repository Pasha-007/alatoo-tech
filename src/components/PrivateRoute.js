// src/components/PrivateRoute.js
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { auth } from '../firebase';

const PrivateRoute = () => {
  return auth.currentUser ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;

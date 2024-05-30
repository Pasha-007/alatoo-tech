import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import Header from './components/Header';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

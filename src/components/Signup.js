// src/components/Signup.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import './Signup.css'; // CSS for styling

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/login');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h1>ALA-TOO TECHNICAL SCHOOL</h1>
        <p>Sign up to have an account with us where you can get all the newest updates and information.</p>
        <form onSubmit={handleSubmit}>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" />
          <button type="submit">Sign Up</button>
          <p>Already have an account? <button onClick={() => navigate('/login')} style={{ color: 'blue', background: 'none', border: 'none', cursor: 'pointer' }}>Log In</button></p>
        </form>
      </div>
    </div>
  );
};

export default Signup;

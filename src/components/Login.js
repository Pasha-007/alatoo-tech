// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import './Login.css'; // CSS for styling

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Welcome Back!</h1>
        <p>Log in to explore all the features and benefits of our platform and see what's new.</p>
        <form onSubmit={handleSubmit}>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" />
          <button type="submit">Log In</button>
          <p>Don't have an account? <button onClick={() => navigate('/signup')} style={{ color: 'blue', background: 'none', border: 'none', cursor: 'pointer' }}>Sign Up</button></p>
        </form>
      </div>
    </div>
  );
};

export default Login;

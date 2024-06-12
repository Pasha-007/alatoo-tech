import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../firebase';
import './Login.css'; // CSS for styling

const Login = () => {
  const [isSigningIn, setIsSigningIn] = useState(false);
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = async () => {
    if (isSigningIn) return;
    setIsSigningIn(true);
    try {
      await signInWithPopup(auth, provider);
      navigate('/');
    } catch (error) {
      setIsSigningIn(false);
      alert(error.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Welcome Back!</h1>
        <p>Log in to explore all the features and benefits of our platform and see what's new.</p>
        <button onClick={handleGoogleSignIn} disabled={isSigningIn}>
          {isSigningIn ? 'Signing In...' : 'Sign in with Google'}
        </button>
        <p>Don't have an account? <button onClick={() => navigate('/signup')} style={{ color: 'blue', background: 'none', border: 'none', cursor: 'pointer' }}>Sign Up</button></p>
      </div>
    </div>
  );
};

export default Login;

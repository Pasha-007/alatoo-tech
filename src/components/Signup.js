import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../firebase';
import './Signup.css'; // CSS for styling

const Signup = () => {
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
    <div className="signup-container">
      <div className="signup-form">
        <h1>ALA-TOO TECHNICAL SCHOOL</h1>
        <p>Sign up to have an account with us where you can get all the newest updates and information.</p>
        <button onClick={handleGoogleSignIn} disabled={isSigningIn}>
          {isSigningIn ? 'Signing In...' : 'Sign up with Google'}
        </button>
        <p>Already have an account? <button onClick={() => navigate('/login')} style={{ color: 'blue', background: 'none', border: 'none', cursor: 'pointer' }}>Log In</button></p>
      </div>
    </div>
  );
};

export default Signup;

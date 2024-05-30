import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import './Header.css'; // Assuming you might want to separate CSS for Header

const Header = () => {
  const [user] = useAuthState(auth);
  const location = useLocation();

  const handleLogout = () => {
    auth.signOut();
  };

  const isProfilePage = location.pathname === '/profile';

  return (
    <header>
      <div className="logo">ALA-TOO TECH</div>
      <nav>
        {user ? (
          <>
            {isProfilePage ? (
              <Link to="/" className="button home">Home</Link>
            ) : (
              <Link to="/profile" className="button profile">Profile</Link>
            )}
            <button onClick={handleLogout} className="button logout">Log Out</button>
          </>
        ) : (
          <>
            <Link to="/login" className="button login">Log In</Link>
            <Link to="/signup" className="button signup">Sign Up</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;

import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import './Main.css';
import profileImage from '../assets/content_1.jpeg';

const Main = () => {
  const [user] = useAuthState(auth);

  const handleLogout = () => {
    auth.signOut();
  };

  return (
    <div className="main-container">
      <header>
        <div className="logo">ALA-TOO TECH</div>
        <nav>
          {user ? (
            <>
              <Link to="/profile" className="button profile">Profile</Link>
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
      <section className="content">
        <div className="text">
          <h1>Quality and Experience</h1>
          <p>
            Quality and Experience: Elevate Your Learning Journey with Us! Our courses embody the pinnacle of educational excellence, carefully crafted to meet the highest standards. With years of teaching expertise, we ensure an enriching experience that equips you with the skills needed to succeed. Join us and experience the difference of learning with a team committed to both quality and experience.
          </p>
        </div>
        <div className="image">
          <img src={profileImage} alt="Profile" />
        </div>
      </section>
    </div>
  );
};

export default Main;

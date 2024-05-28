// src/components/Main.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Main.css'; 
const Main = () => {
  return (
    <div className="main-container">
      <header>
        <div className="logo">BILIM AI</div>
        <nav>
          <Link to="/login" className="button login">Log In</Link>
          <Link to="/signup" className="button signup">Sign Up</Link>
        </nav>
      </header>
      <section className="content">
        <h1>Quality and Experience</h1>
        <p>
          Quality and Experience: Elevate Your Learning Journey with Us! Our courses embody the pinnacle of educational excellence, carefully crafted to meet the highest standards. With years of teaching expertise, we ensure an enriching experience that equips you with the skills needed to succeed. Join us and experience the difference of learning with a team committed to both quality and experience.
        </p>
      </section>
    </div>
  );
};

export default Main;

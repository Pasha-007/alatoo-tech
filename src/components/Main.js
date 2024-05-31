// src/components/Main.js
import React from 'react';
// import Header from './Header';
import './Main.css';
import Courses from './Courses';
import profileImage from '../assets/content_1.jpeg';
import WhyATS from './whyATS';
import Community from './Community';
import Footer from './Footer';

const Main = () => {
  return (
    <div className="main-container">
      {/* <Header showProfileButton={true} /> */}
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
      <Courses />
      <WhyATS />
      <Community />
      <Footer />
    </div>
  );
};

export default Main;

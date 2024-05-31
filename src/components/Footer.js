import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

import insta from '../assets/instagram 1.svg';
import tiktok from '../assets/tik-tok 1.svg';
import tele from '../assets/telegram 1.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-logo">ALA-TOO TECH</div>
        </div>
        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/labs">Labs</Link></li>
            <li><Link to="/mentorship">Mentorship</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>About</h4>
          <ul>
            <li><Link to="/faqs">FAQs</Link></li>
            <li><Link to="/instructors">Instructors</Link></li>
            <li><Link to="/process">Our Process</Link></li>
            <li><Link to="/about">Who are we?</Link></li>
            <li><Link to="/terms">Terms & Conditions</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Find Us</h4>
          <ul className="footer-socials">
            <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><img src={insta} alt="Instagram" /></a></li>
            <li><a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer"><img src={tiktok} alt="TikTok" /></a></li>
            <li><a href="https://www.telegram.org" target="_blank" rel="noopener noreferrer"><img src={tele} alt="Telegram" /></a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import './Community.css';
import communityImage from '../assets/community.svg';
const Community = () => {
  return (
    <div className="community">
      <div className="container">
        <div className="community-box">
          <div className="community-text">
            <h2>Join a community of over 3500 students!</h2>
            <p>Sign up for a ATS course today to up-skill yourself, join a community of learners, and live events.</p>
            <button>Join now</button>
          </div>
          <div className="community-img">
            <img src={communityImage} alt="Community" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;

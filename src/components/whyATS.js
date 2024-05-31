import React from 'react';
import './whyATS.css';
import ptp from '../assets/icon1.png'
import pb from '../assets/icon2.png'
import certification from '../assets/icon3.png'
import affordable from '../assets/icon4.png'
import pt from '../assets/icon5.png'
import infra from '../assets/icon6.png'

const whyElements = [
  {
    id: 1,
    title: 'Peer-to-peer',
    description: 'Get help & support from your peers',
    image: ptp,
  },
  {
    id: 2,
    title: 'Project-based',
    description: 'Build projects while learning',
    image: pb,
  },
  {
    id: 3,
    title: 'Certification',
    description: 'Finish a course & get a Certificate',
    image: certification,
  },
  {
    id: 4,
    title: 'Affordable',
    description: 'Comparatively cheaper than other schools',
    image: affordable,
  },
  {
    id: 5,
    title: 'Passionate teachers',
    description: 'Experienced university professors',
    image: pt,
  },
  {
    id: 6,
    title: 'Infrastructure',
    description: 'Labs & Computers for students to use',
    image: infra,
  },
];

const WhyATS = () => {
  return (
    <div className="whyATS">
      <h2>WHY ATS?</h2>
      <div className="whyGrid">
        {whyElements.map((element) => (
          <div className="whyelement" key={element.id}>
            <img src={element.image} alt={element.title} />
            <h3>{element.title}</h3>
            <p>{element.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyATS;

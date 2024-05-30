import React from 'react';
import './Courses.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import c_image from '../assets/course1.jpeg';
import py_image from '../assets/course2.jpeg';
import ui_image from '../assets/course3.jpeg';

const courses = [
  {
    id: 1,
    title: 'C++',
    description: 'Master C++ programming for efficient software development.',
    image: c_image
  },
  {
    id: 2,
    title: 'Python',
    description: 'Craft engaging interfaces and seamless user experiences.',
    image: py_image,
  },
  {
    id: 3,
    title: 'UI/UX',
    description: 'Learn versatile Python programming for various applications.',
    image: ui_image,
  },
  {
    id: 4,
    title: 'Java',
    description: 'Master C++ programming for efficient software development.',
    image: c_image
  },
  {
    id: 5,
    title: 'Arts',
    description: 'Craft engaging interfaces and seamless user experiences.',
    image: py_image,
  },
  {
    id: 6,
    title: 'Graphics',
    description: 'Learn versatile Python programming for various applications.',
    image: ui_image,
  },
];



const Courses = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
    };
  
    return (
      <div className="courses-section">
        <h2>Our Courses</h2>
        <Slider {...settings} className="courses-container">
          {courses.map((course) => (
            <div className="course-card" key={course.id}>
              <img src={course.image} alt={course.title} className="course-image" />
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <button className="apply-button">Apply</button>
            </div>
          ))}
        </Slider>
      </div>
    );
  };

export default Courses;

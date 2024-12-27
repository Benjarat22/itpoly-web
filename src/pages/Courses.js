import React from 'react';
import Header from '../components/Header';

function Courses() {
  return (
    <div>
      <Header />
      <div className="container mt-4">
        <h2>Our Courses</h2>
        <ul>
          <li>Basic IT Skills (Beginner)</li>
          <li>Advanced Programming (Intermediate)</li>
          <li>Networking Fundamentals (Advanced)</li>
        </ul>
        <img
          src="https://via.placeholder.com/800x400"
          alt="Courses"
          className="img-fluid"
        />
      </div>
    </div>
  );
}

export default Courses;

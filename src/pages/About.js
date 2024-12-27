import React from 'react';
import Header from '../components/Header';

function About() {
  return (
    <div>
      <Header />
      <div className="container mt-4">
        <h2>About Us</h2>
        <p>We are an IT-focused educational institution based in Chiang Mai, dedicated to delivering high-quality education to the community.</p>
        <p>Our mission is to empower students with the knowledge and skills needed for a successful career in IT.</p>
        <img
          src="https://via.placeholder.com/800x400"
          alt="About Us"
          className="img-fluid"
        />
      </div>
    </div>
  );
}

export default About;

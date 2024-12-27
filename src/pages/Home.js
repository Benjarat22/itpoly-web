import React from 'react';
import Header from '../components/Header';

function Home() {
  return (
    <div>
      <Header />
      <div className="container mt-4">
        <h2>Explore Our Activities</h2>
        <p>Discover tourism, activities, and community benefits.</p>
        <img
          src="https://via.placeholder.com/800x400"
          alt="Home Banner"
          className="img-fluid"
        />
      </div>
    </div>
  );
}

export default Home;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import people4 from '../Assets/people4.jpg';
import people5 from '../Assets/people5.jpg';
import people6 from '../Assets/people6.avif';
import './WelcomePage.css';

function WelcomePage() {
  const [images] = useState([people4, people5, people6]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); 

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="home-page">
      <p className='p1'> Just a few more steps and you're ready to go.</p>
      <div className="homepage">
        <img src={images[currentImageIndex]} alt={`People ${currentImageIndex + 1}`} />
        <Link to="/profile">
          <button className="sign-in-button">CONTINUE</button>
        </Link>

      </div>
    </div>
  );
}

export default WelcomePage;
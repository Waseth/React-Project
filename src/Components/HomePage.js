import React from 'react';
import "./HomePage.css";
import berries from "../Assets/berries.png";
import { Link } from 'react-router-dom';

function HomePage() {
    const backgroundImageStyle = {
        backgroundImage: `url(${berries}`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh', 
    };
//link to /form
    return (
        <div className='homeContainer' style={backgroundImageStyle}>
            <h1 className='h1'>WELCOME TO LOVETUBE</h1>
            <Link to="/form"> 
                <button className="sign-in-button">Sign In</button>
            </Link>

        </div>
    );
}

export default HomePage;
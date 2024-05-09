import React from 'react';
import { Link } from 'react-router-dom';
import "./ParentComponent.css";

function ParentComponent() {
  return (
    <div className='parent-container'>
      <div className='heading-container'>
        <h3>Your profile has been created</h3>
        <h4>Continue to see other people's profiles and find your match</h4>
      </div>
      <div className='button-container'>
        <Link to="/peoplelist">
          <button className="sign-in-button">CONTINUE</button>
        </Link>
      </div>
    </div>
  );
}

export default ParentComponent;

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import './FormPage.css'; 

function FormPage() {
    const [promotionalEmails, setPromotionalEmails] = useState(true); 
    const navigate = useNavigate(); 

    const handleCheckboxChange = () => {
        setPromotionalEmails(!promotionalEmails); 
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const isConfirmed = window.confirm("Would you like to save your information on the app?");
        if (isConfirmed) {
            console.log("Information saved!");
            navigate('/welcome'); 
        }
    };

    return (
        <div>
            <div className="background-image"></div>
            <div className="form-container">
                <h2>Sign In Form</h2>
                <form onSubmit={handleSubmit} className="sign-in-form">
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" />
                    </div>
                    <div className="form-group">
                        <label>
                            <input
                                type="checkbox"
                                checked={promotionalEmails}
                                onChange={handleCheckboxChange}
                            />
                            I don't want to receive promotional emails from LoveTube
                        </label>
                    </div>
                    <button type="submit" className="submit-button">Submit</button>
                </form>
                <Link to="/profile" className="back-button">Back to Home</Link> 
            </div>
        </div>
    );
}

export default FormPage;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProfilePic.css'; 

function ProfilePic({ onImageUpload }) {
    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setImage(reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="container">
            <h2 className="heading">Upload Profile Pic</h2>
            <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="input"
            />
            <div>
                {image && (
                    <img
                        src={image}
                        alt="Selected"
                        className="image-preview"
                    />
                )}
            </div>
            <Link to="/parentcomponent">
                <button className="next-button">Next</button>
            </Link>
        </div>
    );
}

export default ProfilePic;
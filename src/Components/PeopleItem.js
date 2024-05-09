import React, { useState } from 'react';
import './PeopleItem.css';
import Notification from './Notification';

function PeopleItem({ name, age, gender, location, interests, preferences, imageSrc, onSelect }) {
    const [showMessageForm, setShowMessageForm] = useState(false);
    const [message, setMessage] = useState('');
    const [isSent, setIsSent] = useState(false);

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            sendMessage();
        }
    };

    const handleLike = () => {
        const selectedPerson = { name, age, gender, location, interests, preferences };
        onSelect(selectedPerson);
    };

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };

    const sendMessage = () => {
        console.log('Message sent:', message);
        setIsSent(true);
        setTimeout(() => setIsSent(false), 3000); 
    };


    return (
        <div className='big-Container'>
            <div className='card-text'>
                <p className="p-detail">
                    Age: {age} <br />
                    Gender: {gender} <br />
                    Location: {location} <br />
                    Interests: {interests} <br />
                    Preferences: {preferences}
                </p>
            </div>
            <div className="card">
                <h5 className="card-title">{name}</h5>
                <img src={imageSrc} className="card-img-top" alt="Profile" />
                <div className="card-body">
                    <button onClick={() => setShowMessageForm(true)} className="btn btn-primary">Message</button>
                    {showMessageForm && (
                        <div>
                            <textarea value={message} onChange={handleMessageChange} onKeyDown={handleKeyDown} placeholder="Type your message here..." />
                            <button onClick={sendMessage} style={{ backgroundColor: isSent ? 'green' : 'initial' }}>
                                {isSent ? 'Sent' : 'Send'}
                            </button>
                        </div>
                    )}

                </div>
            </div>
            <button onClick={handleLike} className="like-button">❤️</button>
            <Notification />
        </div>
    );
}

export default PeopleItem;
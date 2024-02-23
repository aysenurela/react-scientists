import React from 'react';
import YourImage from '.my-avatar.jpg'; // Update the path accordingly

// Card component takes any children
// renders children inside div wrapper with className 'Card'
// if there is no children component should return null;

export default function Card({ children }) {
    return (
        <div className="Card">
            <img src={YourImage} alt="Your Image" className="Card-image" />
            <PersonDetails profession="UI/UX designer" accomplishment="Designed a website" />
            <div className="Card-content">
                {children || null}
            </div>
        </div>
    );
}

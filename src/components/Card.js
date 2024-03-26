// Card component takes any children
// renders children inside div wrapper with className 'Card'
// if there is no children component should return null;


import React from 'react';
import { data } from '../store/data';

export default function Card({ children }) {
    
    if (!children) return null;

    return (
        <div className="Card">
            {children}
        </div>
    );
}

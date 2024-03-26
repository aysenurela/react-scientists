// Avatar component takes person object as props
// returns an img element with className 'Avatar'
// img element should have src and alt attributes

import React from 'react';
import { data } from '../store/data';

export default function Avatar(props) {    
    const { person } = props;

    return (
        <img className="Avatar" src={person.imageUrl} alt={person.name} />
    );
}

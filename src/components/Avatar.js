// Avatar component takes person object as props
// returns an img element with className 'Avatar'
// img element should have src and alt attributes

import { keyboard } from "@testing-library/user-event/dist/keyboard";
import { useLayoutEffect } from "react";



export default function Avatar(props) {   

    return (
        <>
       <img className="Avatar"
        src={props.person.imageUrl} 
        alt={props.person.name} /> 
       </>
    )
}
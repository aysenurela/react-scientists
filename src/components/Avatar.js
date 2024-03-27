// Avatar component takes person object as props

export default function Avatar(props) {    
    const { person } = props;

// returns an img element with className 'Avatar'
// img element should have src and alt attributes
    return (
        <>
            <img className="Avatar"src={person.imageUrl} alt={person.name}></img>
        </>    
    )
}
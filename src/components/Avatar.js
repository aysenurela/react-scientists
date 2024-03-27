// Avatar component takes person object as props
// returns an img element with className 'Avatar'
// img element should have src and alt attributes

export default function Avatar(props) {    
    const { person } = props;

    return (
        <img
            classname = "Avatar"
            src = {person.imageUrl}
            alt = "image"
        />
    )
}
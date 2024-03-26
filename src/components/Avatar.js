export default function Avatar(props) {    
    const { person } = props;
    return(
        <div>
            <img src={person.imageUrl} alt="Images" className="Avatar"></img>
        </div>
    )
}

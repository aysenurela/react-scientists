export default function Avatar(props) {
    const { person } = props;

    return (
        <div>
            <img
                className="Avatar"
                src={person.imageUrl}
                alt={person.name}
            />
        </div>
    );

}
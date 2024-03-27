// Avatar component takes person object as props
// returns an img element with className 'Avatar'
// img element should have src and alt attributes

export default function Avatar({ person }) {
    const { imageUrl, name } = person;
  
    return <img className="Avatar" src={imageUrl} alt={name} />;
  }
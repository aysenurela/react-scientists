// Card component takes any children
// renders children inside div wrapper with className 'Card'
// if there is no children component should return null;

export default function Card(props) {
    if (!props.children) {
        return null;
    } else { 
        return(
        <div>
            {props.children}
        </div>
    )}
   
}
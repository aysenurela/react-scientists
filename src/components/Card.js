// Card component takes any children
// renders children inside div wrapper with className 'Card'
// if there is no children component should return null;

export default function Card({ children }) {
    return children ? <div className="Card">{children}</div> : null;
}
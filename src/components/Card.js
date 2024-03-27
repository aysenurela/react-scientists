// Card component takes any children
// renders children inside div wrapper with className 'Card'

export default function Card({ children }) {

// if there is no children component should return null;

return children ? <div className="Card">{children}</div> : null;
}
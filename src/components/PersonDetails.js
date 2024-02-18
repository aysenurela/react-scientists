// Component PersonDetails should render an unordered list to list 
  // 1. Person's profession 
  // 2. Person's accomplishment

export default function PersonDetails({ profession, accomplishment }) {
  return (
    <ul className="PersonDetails">
      <li>{profession}</li>
      <li>{accomplishment}</li>
    </ul>
  )
}
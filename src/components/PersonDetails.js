// Component PersonDetails should render an unordered list 
  // unordered list should have two <li> item with below details:
    // 1. Person's profession 
    // 2. Person's accomplishment

export default function PersonDetails({ profession, accomplishment }) {
  return (
    // unordered list should have two <li> item with below details:
    // 1. Person's profession 
    // 2. Person's accomplishment
    <ul>
      <li>{profession}</li>
      <li>{accomplishment}</li>
    </ul>
  );
}
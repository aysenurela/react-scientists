import "./App.css"

import Avatar from "./components/Avatar"
import Card from "./components/Card"
import PersonDetails from "./components/PersonDetails"

import { data } from "./store/data"

function App() {

  return (
    <div className="App">
      <header><h1>Scientists</h1></header>
      <section>
        {data.map((person) => (
          <Card>
            <h2>{person.name}</h2>
            <Avatar person={person} />
            <PersonDetails {...person} />
          </Card>
        ))}
      </section>
    </div>
  );
}

export default App;

import "./App.css"

import Avatar from "./components/Avatar"
import Card from "./components/Card"
import PersonDetails from "./components/PersonDetails"

import { data } from "./store/data"


// const person =  [{
//   id: 1,
//   name: "Creola Katherine Johnson", 
//   profession: "mathematician",
//   accomplishment: "spaceflight calculations",
//   imageUrl: "https://i.imgur.com/yXOvdOSs.jpg"
// }]

function App() {

  return (
    <div className="App">
      <header><h1>Scientists</h1></header>
      <section>
        {data.map((person) => (
          <li key={person.id}>
          <Card>
            <h2>{person.name}</h2>
            <Avatar person={person} />
            <PersonDetails {...person} />
          </Card>
          </li>
         
        ))}
      </section>
    </div>
  );
}

export default App;

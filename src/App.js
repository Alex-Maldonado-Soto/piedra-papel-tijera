import "./App.scss";
import { Select } from "./Components/Select";
import { Score } from "./Components/Score";
import { Versus } from "./Components/Versus";
import { Rules } from "./Components/Rules";
import { useState } from "react";

function App() {

  const [attack, setAttack] = useState("");

  const piece = (newMove) => {
    setAttack(newMove)
  }

  return (
    <main>
      <Score />
      <Select  piece={piece} attack={attack}/>
      <Versus attack={attack}/>
      <Rules/> 
    </main>
  );
}

export default App;

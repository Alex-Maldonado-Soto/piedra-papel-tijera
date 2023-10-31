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

  const [attackEnemy, setAttacker] = useState("");

  const moveEnemy = (newMove) => {
    setAttacker(newMove)
  }

 const [winner, setWinner] = useState("");

 const battle = (player) => {
    setWinner(player)
    console.log(player);
 }


  return (
    <main>

<figure className='select__scissors' id='scissors'>
       <img onClick={() => battle("scissor")} alt="select scissor"/>
      </figure>
      <Score />
      <Select  
      piece={piece} 
      attack={attack}
      />
      <Versus 
      moveEnemy={moveEnemy}
      attack={attack} 
      />
      <Rules/> 
    </main>
  );
}

export default App;

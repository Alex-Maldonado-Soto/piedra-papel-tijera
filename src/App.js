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

 const battle = (newWinner) => {
    setWinner(newWinner)
 }

 if(attackEnemy){
    if(!winner){
      if (attack === "scissor" && attackEnemy === "paper" || attack === "scissor" && attackEnemy === "lizard") {
        battle("WINNER")
      } else if (attack ==="paper" && attackEnemy === "rock" || attack === "paper" && attackEnemy === "spock") {
        battle("WINNER")
      } else if (attack === "rock" && attackEnemy === "lizard" || attack === "rock" && attackEnemy === "scissor") {
        battle("WINNER")
      } else if (attack === "lizard" && attackEnemy === "spock" || attack === "lizard" && attackEnemy === "paper") {
        battle("WINNER")
      } else if (attack === "spock" && attackEnemy === "scissor" || attack === "spock" && attackEnemy === "rock") {
        battle("WINNER")
      } else if (attack === "scissor" && attackEnemy === "rock" || attack === "scissor" && attackEnemy === "spock") {
        battle("DEFEAT")
      } else if (attack === "paper" && attackEnemy === "lizard" || attack === "paper" && attackEnemy === "scissor") {
        battle("DEFEAT")
      } else if (attack === "rock" && attackEnemy === "paper" || attack === "rock" && attackEnemy === "spock") {
        battle("DEFEAT")
      } else if (attack === "lizard" && attackEnemy === "scissor" || attack === "lizard" && attackEnemy === "rock") {
        battle("DEFEAT")
      } else if (attack === "spock" && attackEnemy === "lizard" || attack === "spock" && attackEnemy === "paper") {
        battle("DEFEAT")
      } else if (attack === "scissor" && attackEnemy === "scissor") {
        battle("TIE")
      } else if (attack === "paper" && attackEnemy === "paper") {
        battle("TIE")
      } else if (attack === "rock" && attackEnemy === "rock") {
        battle("TIE")
      } else if (attack === "lizard" && attackEnemy === "lizard") {
        battle("TIE")
      } else if (attack === "spock" && attackEnemy === "spock") {
        battle("TIE")
      }
    }
 }

  return (
    <main>
      <Score 
      winner={winner}
      />
      <Select  
      piece={piece} 
      attack={attack}
      />
      <Versus 
      winner={winner}
      moveEnemy={moveEnemy}
      attack={attack} 
      attackEnemy={attackEnemy}
      />
      <Rules/> 
    </main>
  );
}

export default App;

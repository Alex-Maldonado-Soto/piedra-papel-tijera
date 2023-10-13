import "./App.scss";
import { Select } from "./Components/Select";
import { Score } from "./Components/Score";
import { Versus } from "./Components/Versus";
import { Rules } from "./Components/Rules";

function App() {

  return (
    <main>
      <Score />
      <Select />
      <Versus />
      <Rules/> 
    </main>
  );
}

export default App;

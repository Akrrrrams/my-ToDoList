import { ClearTask } from "./components/ClearTask";
import { Filters } from "./components/Filters";
import { TaskInput } from "./components/TaskInput";
import { TaskList } from "./components/TaskList";

function App() {
  return (
    <div id="main-container">
      <TaskInput />
      <TaskList />
      <Filters />
      <ClearTask />
    </div>
  );
}

export default App;

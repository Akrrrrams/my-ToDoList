import { AddTask } from "./components/AddTask";
import { ClearTask } from "./components/ClearTask";
import { Filters } from "./components/Filters";
import { Sort } from "./components/Sort";
import { TaskList } from "./components/TaskList";

function App() {
  return (
    <div id="main-container">
      <div className="d-flex justify-content-between mb-3">
        <Sort />
        <AddTask />
      </div>
      <TaskList />
      <Filters />
      <ClearTask />
    </div>
  );
}

export default App;

import { ClearTask } from "./components/ClearTask";
import { Filters } from "./components/Filters";
import { Sort } from "./components/Sort";
import { TaskList } from "./components/TaskList";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <div className="row justify-content-center">
          <div className="col col-md-10 col-lg-8 col-xl-6">
            <Filters />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col col-md-10 col-lg-8 col-xl-6 mb-3">
            <Sort />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col col-md-10 col-lg-8 col-xl-6">
            <TaskList />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col col-md-10 col-lg-8 col-xl-6">
            <ClearTask />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
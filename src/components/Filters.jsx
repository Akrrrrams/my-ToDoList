import { useContext } from "react";
import { TasksContext } from "../context/TasksContext";

const Filters = () => {
  const { filter, setFilter } = useContext(TasksContext);

  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div
      className="btn-group w-100 mb-3"
      role="group"
      aria-label="Basic radio toggle button group"
    >
      <input
        type="radio"
        className="btn-check"
        name="btnradio"
        id="all"
        value="all"
        onChange={handleChange}
        checked={filter === "all"}
      />
      <label className="btn btn-outline-dark" htmlFor="all">
        Show All
      </label>

      <input
        type="radio"
        className="btn-check"
        name="btnradio"
        id="completed"
        value="completed"
        onChange={handleChange}
        checked={filter === "completed"}
      />
      <label className="btn btn-outline-dark" htmlFor="completed">
        Show Completed
      </label>

      <input
        type="radio"
        className="btn-check"
        name="btnradio"
        id="uncompleted"
        value="uncompleted"
        onChange={handleChange}
        checked={filter === "uncompleted"}
      />
      <label className="btn btn-outline-dark" htmlFor="uncompleted">
        Show Uncompleted
      </label>
    </div>
  );
};

export { Filters };

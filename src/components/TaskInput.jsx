import { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TasksContext } from "../context/TasksContext";

const TaskInput = () => {
  const { addTask } = useContext(TasksContext);

  const [taskLabel, setTaskLabel] = useState("");
  const [priority, setPriority] = useState("low");

  const handleAddTask = () => {
    if (taskLabel.trim() === "") {
      return;
    }

    const newTask = {
      taskId: `task-${uuidv4()}`,
      label: taskLabel.trim(),
      priority,
      isCompleted: false,
    };

    addTask(newTask);

    setTaskLabel("");
  };

  // change event handler
  const handleChange = (e) => {
    setTaskLabel(e.target.value);
  };

  // keydown event handler
  const handleKeyDown = (e) => {
    // only when the enter key is pressed
    if (e.key === "Enter") {
      handleAddTask();
    }
  };

  const handlePriorityChange = (e) => {
    setPriority(e.target.value);
  };

  return (
    <div>
      <div className="mb-3">
        <input
          id="newTaskText"
          type="text"
          className="form-control w-100"
          placeholder="What do you need to do today?"
          aria-label="What do you need to do today?"
          aria-describedby="task-input"
          value={taskLabel}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </div>
      <div className="mb-3">
        <select
          className="form-select priority"
          value={priority}
          onChange={handlePriorityChange}
        >
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </div>
      <button
        className="btn btn-dark w-100 mb-3"
        type="button"
        id="task-input"
        onClick={handleAddTask}
      >
        Add Task
      </button>
    </div>
  );
};

export { TaskInput };

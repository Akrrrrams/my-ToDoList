import { useContext } from "react";
import { Modal } from "./Modal";
import { TasksContext } from "../context/TasksContext";

const ClearTask = () => {
  const { tasks, clearCompletedTasks } = useContext(TasksContext);

  const disabled = tasks.filter((task) => task.isCompleted).length === 0;

  return (
    <>
      <div className="w-100">
        <button
          className="btn btn-dark w-100"
          id="clear-completed-tasks"
          data-bs-toggle="modal"
          data-bs-target="#clearCompletedTasks"
          disabled={disabled}
        >
          Clear Completed Tasks
        </button>
      </div>

      <Modal id="clearCompletedTasks" handleDelete={clearCompletedTasks} />
    </>
  );
};

export { ClearTask };

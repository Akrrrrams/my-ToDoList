import { useContext, useState } from "react";
import { Modal } from "./Modal";
import { TaskItem } from "./TaskItem";
import { TasksContext } from "../context/TasksContext";
import { PriorityMapping } from "../constants";

const TaskList = () => {
  const { tasks, filter, deleteTask, sortOrder } = useContext(TasksContext);

  const [taskToBeDeleted, setTaskToBeDeleted] = useState();
  console.log("taskToBeDeleted is updated", taskToBeDeleted);

  const filteredTasks = tasks.filter((task) => {
    switch (filter) {
      case "all":
        return true;
      case "completed":
        return task.isCompleted;
      case "uncompleted":
        return !task.isCompleted;
      default:
        return true;
    }
  });

  const sortedTasks = filteredTasks.sort((a, b) => {
    switch (sortOrder) {
      case "default":
        return 0; // keeping the same order
      case "plh":
        return (
          PriorityMapping[a.priority].value - PriorityMapping[b.priority].value
        );
      case "phl":
        return (
          PriorityMapping[b.priority].value - PriorityMapping[a.priority].value
        );
      default:
        return 0;
    }
  });

  const taskItems = sortedTasks.map((task) => {
    return (
      <TaskItem
        key={task.taskId}
        task={task}
        setTaskToBeDeleted={setTaskToBeDeleted}
      />
    );
  });

  const noDataMessage = (
    <li className="list-group-item d-flex justify-content-center align-items-center text-muted">
      Nothing to show here
    </li>
  );

  const handleDeleteTask = () => {
    console.log("Deleting task w/ ID: ", taskToBeDeleted.taskId);
    deleteTask(taskToBeDeleted.taskId);
  };

  return (
    <>
      <ul className="list-group mb-3" id="taskList">
        {filteredTasks.length > 0 ? taskItems : noDataMessage}
      </ul>
      <Modal
        id="taskListDeleteTask"
        handleDelete={handleDeleteTask}
        message={`The task "${taskToBeDeleted?.label}" will be deleted permanently.`}
      />
    </>
  );
};

export { TaskList };
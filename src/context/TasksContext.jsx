import { createContext, useEffect, useState } from "react";

const TasksContext = createContext();

const TasksContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const tasksFromLocalStorage = JSON.parse(
      window.localStorage.getItem("react-todo-list-tasks")
    );

    if (!!tasksFromLocalStorage) {
      setTasks(tasksFromLocalStorage);
    }
  }, []);

  const updateTasks = (tasks) => {
    setTasks(tasks);
    window.localStorage.setItem("react-todo-list-tasks", JSON.stringify(tasks));
  };

  const addTask = (task) => {
    const updatedTasks = [...tasks, task];
    updateTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.taskId !== taskId);
    updateTasks(updatedTasks);
  };

  const toggleTask = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.taskId === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });
    updateTasks(updatedTasks);
  };

  const updateTaskLabel = (taskId, newLabel) => {
    const updatedTasks = tasks.map((task) => {
      if (task.taskId === taskId) {
        return {
          ...task,
          label: newLabel,
        };
      }
      return task;
    });
    updateTasks(updatedTasks);
  };

  const clearCompletedTasks = () => {
    const uncompletedTasks = tasks.filter((task) => !task.isCompleted);
    updateTasks(uncompletedTasks);
  };

  return (
    <TasksContext.Provider
      value={{
        tasks,
        filter,
        setFilter,
        addTask,
        deleteTask,
        toggleTask,
        updateTaskLabel,
        clearCompletedTasks,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export { TasksContext, TasksContextProvider };

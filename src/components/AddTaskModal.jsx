import React from "react";
import { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TasksContext } from "../context/TasksContext";

const ADD_TASK_MODAL_ID = "addTaskModal";

const AddTaskModal = () => {
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
        <div
            className="modal fade"
            id={ADD_TASK_MODAL_ID}
            tabindex="-1"
            aria-labelledby={`${ADD_TASK_MODAL_ID}LABEL`}
            aria-hidden="true"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
        >
            <div className="modal-dialog modal-dialog-centered modal-md">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id={`${ADD_TASK_MODAL_ID}LABEL`}>
                            Create a New Task
                        </h1>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body">
                        {" "}
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
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                        >
                            Cancel
                        </button>
                        <button
                            type="button"
                            className="btn btn-primary"
                            data-bs-dismiss="modal"
                            onClick={handleAddTask}
                        >
                            Add Task
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { AddTaskModal, ADD_TASK_MODAL_ID };
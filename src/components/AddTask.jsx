import{AddTaskModal,ADD_TASK_MODAL_ID} from "./AddTaskModal";

const AddTask = () => {
  return <div className="mb-3">
    <button 
     className="btn btn-dark w-100"
     type="button"
     id="add-task-modal-trigger"
     data-bs-toggle="modal"
     data-bs-target={`#{ADD_TASK_MODAL_ID}`}
     >
        Add Task
     </button>
     AddTask</div>
     ;
};

export {AddTask};

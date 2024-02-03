import { AddTask } from "./AddTask";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
      <div className="container-fluid container-sm">
        <a className="navbar-brand" href="/">
           To Do List
        </a>
        <AddTask />
      </div>
    </nav>
  );
};
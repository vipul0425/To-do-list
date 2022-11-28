import { VscTrash, VscCheck } from "react-icons/vsc";
import { useContext } from "react";
import TaskContext from "./TaskContext";
import {Link} from "react-router-dom";

const Pending = () => {
  const [tasks, setTask] = useContext(TaskContext);
  const handleDone = (index) => {
    const newTasks = [...tasks];
    newTasks[index].done = true;
    setTask(newTasks);
  };

  const handleDelete = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTask(newTasks);
  };
  return (
    <div className="container mt-2">
      <h2>Pending Tasks</h2>
      <ul className="list-group">
        {tasks.length === 0
          ? "No task here please add some task first!"
          : tasks.map((item, index) =>
              item.done === false ? (
                <li
                  className="list-group-item d-flex justify-content-between align-items-start"
                  key={index}
                >
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">{item.text}</div>
                  </div>
                  <button
                    className="border-0 fs-4"
                    onClick={() => {
                      handleDone(index);
                    }}
                  >
                    <VscCheck />
                  </button>
                  <button
                    className="border-0 fs-4 ms-2"
                    onClick={() => {
                      handleDelete(index);
                    }}
                  >
                    <VscTrash />
                  </button>
                </li>
              ) : (
                ""
              )
            )}
      </ul>
      <div className="mt-3 mb-2">
        <button className="btn btn-warning">
          <Link
            to="/"
            className="text-decoration-none fw-bold text-dark"
          >
            Back to home
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Pending;

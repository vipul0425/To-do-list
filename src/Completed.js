import { useContext } from "react";
import TaskContext from "./TaskContext";
import {Link} from "react-router-dom";

const Completed = () => {
    const[tasks] = useContext(TaskContext);

  return (
    <div className="container mt-2">
      <h2>Completed Tasks</h2>
      <ul className="list-group">
        {tasks.length === 0 ? "No task here please add some task first!" : tasks.map((item,index)=>(
            item.done === true ? (
            <li className="list-group-item text-start fw-bold" key={index}>
            {item.text}
          </li>
            ) : ''
        ))
        }
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

export default Completed;
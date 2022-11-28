/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useContext } from "react";
import {Link} from "react-router-dom";
import TaskContext from "./TaskContext";

const Landing = ()=>{
    const [task, setTask] = useContext(TaskContext);
    const [value, setValue] = useState("");

    useEffect(()=>{
        if(value === ""){
            return;
        } else{
            const newTask = {
                text : value,
                done: false
            }
            setTask([...task,newTask])
        }
    },[value])

    return(
        <div className="container mt-2">
            <h1>To-do list</h1>
            <form onSubmit={(e)=>{e.preventDefault(); setValue(e.target.task.value); e.target.task.value = ""}}>
                <div className="mb-3">
                    <input type="text" className="form-control mb-3" placeholder="Add your task here!" id="task"/>
                    <input type="submit" className="btn btn-primary" value="Add task" />
                    {console.log(value,task)}
                </div>
            </form>
            <div>
                <button className="btn btn-warning"><Link to="/pending" className="text-decoration-none fw-bold text-dark">Pending Tasks</Link></button>
                <button className="btn btn-warning ms-3"><Link to="/completed" className="text-decoration-none fw-bold text-dark">Completed Tasks</Link></button>
            </div>
        </div>
    )
}

export default Landing;
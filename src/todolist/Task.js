import{ FaTimes } from 'react-icons/fa';
import {AiFillEdit} from "react-icons/ai";
import { useState } from 'react';

const Task = ({task, onDelete, onToggle, onEdit}) => {


    return (
        <div className={`task ${task.completed ? 'completed' : ''}`}  >
            <div className="day-cat">
                <p>{task.day}</p>
                <p>{task.category}</p>
            </div>
            <div  contentEditable
            onKeyUp={event => {
                console.log("hello")
                onEdit(task.id,event.currentTarget.textContent)
                console.log(event.target.innerText)
            } } 
             >{task.text}</div>
             <div className="icons-box">
             <input type="checkbox" checked={task.completed} value={task.completed} 
            onChange={()=> onToggle(task.id)} />
             <p><FaTimes style={{color: "#BA6D9E", cursor: "pointer", height: "17px", width: "17px" }} onClick={() => onDelete(task.id)} /></p>
             </div>
        </div>
    )
}

export default Task



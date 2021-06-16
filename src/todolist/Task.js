import{ FaTimes } from 'react-icons/fa';
import {AiFillEdit} from "react-icons/ai";


const Task = ({task, onDelete, onToggle}) => {

    // handle editing
const handleEditing = () => {
    console.log("edit mode")
  };

    return (
        <div className={`task ${task.completed ? 'completed' : ''}`} onDoubleClick={()=> onToggle(task.id)} >
            <p>{task.day}</p>
            <p>{task.category}</p>
            <h3>{task.text}<FaTimes style={{color: "orange", cursor: "pointer"}} onClick={() => onDelete(task.id)} />< AiFillEdit onClick={()=> handleEditing()}/></h3>
            
        </div>
    )
}

export default Task

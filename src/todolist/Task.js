import { FaTimes } from 'react-icons/fa';
import Form from 'react-bootstrap/Form'

const Task = ({ task, onDelete, onToggle, onEdit }) => {

    return (
        <div className={`task ${task.completed ? 'completed' : ''}`} >
            <div className="m-2">
                <p>{task.day}</p>
                <p>{task.category}</p>
            </div>
            <div contentEditable
                onKeyUp={event => {
                    onEdit(task.id, event.currentTarget.textContent)
                    console.log(event.target.innerText)
                }}
            style={{fontSize: "20px", fontWeight: "bold"}}>{task.text}</div>
            <div className="icons">
                <Form.Check type="checkbox" checked={task.completed} value={task.completed}
                    onChange={() => onToggle(task.id)} style={{ cursor: "pointer" }} />
                <FaTimes style={{ color: "#BA6D9E", cursor: "pointer" }} onClick={() => onDelete(task.id)} />
            </div>
        </div>
    )
}

export default Task



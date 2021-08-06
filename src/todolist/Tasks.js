import Task from "./Task";
import Button from 'react-bootstrap/Button';

const Tasks = ({tasks, onDelete, onToggle, removeCompleted, onEdit}) => {
    
    return (
        <>
            {tasks
            .map((task) => 
                <Task 
                key={task.id} 
                task={task} 
                onToggle={onToggle} 
                onDelete={onDelete}
                onEdit={onEdit}
            />)
            }

<Button variant="dark" onClick={removeCompleted} className="button_completed">Remove completed</Button>
        </>
    )
}

export default Tasks

import Task from "./Task";

const Tasks = ({tasks, onDelete, onToggle, removeCompleted}) => {
    
    return (
        <>
            {tasks
            .sort((a, b) => {
                a = parseInt(a.day.split('-').reverse().join('-'));
                b = parseInt(b.day.split('-').reverse().join('-'));
                if (a < b) {
                    return -1;
                } else if (a > b) {
                    return 1;
                } else {
                    return 0;
                }
            })
            .map((task) => 
                <Task 
                key={task.id} 
                task={task} 
                onToggle={onToggle} 
                onDelete={onDelete} 
            />)
            }

<button onClick={removeCompleted} className="button_completed">Remove completed</button>
        </>
    )
}

export default Tasks


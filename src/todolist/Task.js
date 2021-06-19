import{ FaTimes } from 'react-icons/fa';
import {AiFillEdit} from "react-icons/ai";
import { useState } from 'react';



const Task = ({task, onDelete, onToggle, onEdit}) => {


    
    const [divText, setDivText] = useState("")



    return (
        <div className={`task ${task.completed ? 'completed' : ''}`}  >
            <input type="checkbox" checked={task.completed} value={task.completed} 
            onChange={()=> onToggle(task.id)} />
            <p>{task.day}</p>
            <p>{task.category}</p>
            <p><FaTimes style={{color: "orange", cursor: "pointer"}} onClick={() => onDelete(task.id)} /></p>
        
            <div  contentEditable
            onInput={event => {
                const aaa = setDivText(event.target.innerText)
                onEdit(task.id,aaa)

            } } 
             >{task.text}</div>

             <p>{divText}</p>

            
            

     
    
            

            
            
            


        </div>
    )
}

export default Task

/*onChange={(e)=> setCompleted(e.currentTarget.checked)}/>

<div className={`task ${task.completed ? 'completed' : ''}`} onDoubleClick={()=> onToggle(task.id)} >

< AiFillEdit onClick={handleEditing}/>

<h3 contentEditable={isEditing} onDoubleClick={handleEditing}>{task.text}</h3>

<div  contentEditable="true" onClick={()=> onEdit(task.id)} >{task.text}</div>

*/

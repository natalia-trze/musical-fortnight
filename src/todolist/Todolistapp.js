import '../App.css';
import Headertodo from './Headertodo';
import Tasks from './Tasks';
import { useState, useEffect } from "react"
import Addtask from './Addtask';



function Todolistapp() {
  const initialState = JSON.parse(localStorage.getItem("data")) || [{}];
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState(initialState);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(tasks));
    }, [tasks]);


//add task
const addTask = (task) => {
  const id = Math.floor(Math.random()* 10000) + 1
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
}

// detele task 

const deleteTask = (id) => {
  setTasks(tasks.filter((task)=> task.id !== id))
}
// toggle completed

const toggleCompleted = (id) => {
  setTasks(
    tasks.map((task) =>
    task.id === id ? {...task, completed: !task.completed} : task 
    )
  )
}
//remove completed
const removeCompleted = () => {
  let filteredTasks = tasks.filter(task => {
    return !task.completed;
  });
  setTasks(filteredTasks);
}


  return (
    <div className="App">
    
      <Headertodo 
      title="To - Do List" 
      onAdd={()=> setShowAddTask
      (!showAddTask)}
      showAdd={showAddTask}
      />
      {showAddTask && <Addtask onAdd={addTask} 
      />} 
      {tasks.length > 0 ? (<Tasks tasks={tasks} onToggle={toggleCompleted} onDelete={deleteTask} removeCompleted={removeCompleted} />)
      : 
      ("") }

    </div>
  );
}

export default Todolistapp;

//import '../App.css';
import './Todolistapp.css';
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
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  // detele task 
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }
  // toggle completed
  const toggleCompleted = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
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

  //Edit
  const saveEditedText = (id, aaa) => {
    console.log(id, aaa)

    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, text: aaa } : t
      )
    )
  }


  return (
    <div className="app-todo">
      <Headertodo
        title="To - Do List"
        onAdd={() => setShowAddTask
          (!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <Addtask onAdd={addTask}
      />}
      {tasks.length > 0 ? (<Tasks tasks={tasks}
        onToggle={toggleCompleted} onDelete={deleteTask}
        removeCompleted={removeCompleted}
        onEdit={saveEditedText} />)
        :
        ("")}

    </div>
  );
}

export default Todolistapp;

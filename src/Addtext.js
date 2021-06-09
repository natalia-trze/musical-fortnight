import { useEffect, useState } from "react";
export default function Addtext() {
  const initialState = JSON.parse(localStorage.getItem("data")) || [{}];  
  const [userInput, setUserInput] = useState([]);
  const [addDate, setAddDate] = useState([]);
  const [exampleArray, setExampleArray] = useState(initialState);
  const handleClick = () => setExampleArray((p) => [...p, [userInput, addDate]]);
  const [isEditing, setEditing] = useState(false);
/*working on editing feature + filter by date */


  const deleteTask = (i) => {
    setExampleArray(function (previous) {
      const newList = [...previous];
      newList.splice(i, 1);
      return newList;
    });
  };

  const dateManager = (event) => {
    event.preventDefault();
    setAddDate(()=> event.target.value)
  }

  const onChange = (event) => {
    event.preventDefault();
    setUserInput(() => event.target.value)
}
  
   const emptyInput = (event) => {
    event.target.value = " ";
  };

    useEffect(() => {
     localStorage.setItem("data", JSON.stringify(exampleArray));
     }, [exampleArray]);

     console.log(exampleArray)

  return (
    <div className="addText">
      <div className="wrapper">
      <button id="addNewTask" onClick={function(){handleClick(userInput, addDate)}}>Add task</button>
      <input type="text" id="user-input" onChange={onChange} onClick={emptyInput} placeholder="add a new to-do" />
      <input type="date" onChange={dateManager}/>
      </div>
      <ul>
      {exampleArray.map((item, i) => (
          
        <li key={i}>
            <input  type ="checkbox" className="check"  />
            {item[0]}
            <button key={i} className="delete-item" onClick={function(){deleteTask(i)} } >&#10007;</button>
            <button className="edit-button" onClick={() => setEditing(true)}>&#9998;</button>
            <span>{item[1]}</span>
            
        </li>
      ))}
      </ul>
    </div>
  );
}

    
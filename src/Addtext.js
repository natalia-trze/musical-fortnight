import { useEffect, useState } from "react";
export default function Addtext() {
  const initialState = JSON.parse(localStorage.getItem("data")) || [];  
  let [userInput, setUserInput] = useState([]);
  let [exampleArray, setExampleArray] = useState(initialState);


  const handleClick = () => setExampleArray((p) => [...p, userInput]);

  const deleteTask = (i) => {
    setExampleArray(function (previous) {
      const newList = [...previous];
      newList.splice(i, 1);
      return newList;
    });
  };

  const onChange = (event) => {
    event.preventDefault();
    userInput = event.target.value;
    console.log(userInput);
}
  
   const emptyInput = (event) => {
    event.target.value = " ";
  };

    useEffect(() => {
     localStorage.setItem("data", JSON.stringify(exampleArray));
     }, [exampleArray]);



  return (
    <div className="addText">
      
      <button id="addNewTask" onClick={function(){handleClick(userInput)}}>Add task</button>
      <input type="text" id="user-input" onChange={onChange} onClick={emptyInput} placeholder="add a new to-do" />
      <ul>
      {exampleArray.map((item, i) => (
          
        <li key={i}>
            <input  type ="checkbox" className="check"  />
            {item}
            <button key={i} className="delete-item" onClick={function(){deleteTask(i)} } >&#10007;</button><span>addDate</span>
        </li>
      ))}
      </ul>
    </div>
  );
}

    
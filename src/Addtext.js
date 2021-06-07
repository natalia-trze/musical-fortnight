import { useEffect, useState } from "react";
export default function Addtext() {
  const initialState = JSON.parse(localStorage.getItem("data")) || [];  
  let [userInput, setUserInput] = useState([]);
  let [exampleArray, setExampleArray] = useState(initialState);
  //const handlePlus = () => setUserInput((p) => p + 1);
  //const handleMinus = () => setUserInput((p) => p - 1);
  //let handleArrayAdd = () => setExampleArray((p) => [...p, userInput]);
  //console.log(exampleArray)

  //let userInput=""

  //const handleClick = (userInput) => alert('your Text ...'+userInput);
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
    //console.log(event.target.value);
    userInput = event.target.value;
    console.log(userInput)
}

    useEffect(() => {
     localStorage.setItem("data", JSON.stringify(exampleArray));
     }, [exampleArray]);

/*    <button onClick={handlePlus}>+</button>
      <button onClick={handleMinus}>-</button>
      <button onClick={handleArrayAdd}>add to array</button>
*/

  return (
    <div className="App">
      
      <button id="addNewTask" onClick={function(){handleClick(userInput)}}>Add task</button>
      <input type="text" id="user-input" onChange={onChange}  defaultValue="add item here" placeholder="add a new to-do" />
      <ul>
      {exampleArray.map((item, i) => (
          
        <li key={i}>
            <input  type ="checkbox" className="check" />
            {item}
            <button key={i} className="delete-item" onClick={function(){deleteTask(i)} } >&#10006;</button>
        </li>
      ))}
      </ul>
    </div>
  );
}
































/*export default function Addtext () {

    let userInput=""
    let toDoList=[1,2,3]
    console.log(toDoList)

    //const handleClick = (userInput) => alert('your Text ...'+userInput);
    
    let addToDoListItem = (task) => {
        toDoList.push({ id: 1, task: task, done: false });
        console.log(toDoList)
      };

    const handleClick = (userInput) =>{
        addToDoListItem(userInput);
    }   

    const onChange = (event) => {
        event.preventDefault();
        //console.log(event.target.value);
        userInput = event.target.value;
        console.log(userInput)
    }



    return( 
    <div className="add-buttons">    
        <form>
            <button id="addNewTask" onClick={function(){handleClick(userInput)}}>Add task</button>
            <input type="text" id="user-input" onChange={onChange} defaultValue="text" placeholder="add a new to-do" />
        </form>
    </div>)
        
};*/



 /*<div class="add-buttons">
        <form>
          <button id="addNewTask" class="storage-button">Add task</button>
          <input type="text" id="user-input" class="storage" placeholder="add a new to-do" />
          <div id="popup"></div>
        </form>
      </div>*/
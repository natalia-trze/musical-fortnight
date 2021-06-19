import { useEffect, useState } from "react";
import Calendar from "./Calendar";
import { getDayOfYear, parseISO } from 'date-fns'

export default function Addtext() {
  const initialState = JSON.parse(localStorage.getItem("data")) || [{}];
  const [userInput, setUserInput] = useState();
  const [addDate, setAddDate] = useState();
  const [category, setCategory] = useState();
  const [exampleArray, setExampleArray] = useState(initialState);
  const handleClick = () => setExampleArray((p) => [...p, { userInput, addDate, category, isEditing }]);
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
    setAddDate(() => event.target.value)
  }

  const onChange = (event) => {
    event.preventDefault();
    setUserInput(() => event.target.value);

  }

  const catManager = (event) => {
    event.preventDefault();
    setCategory(() => event.target.value);
  }

  const emptyInput = (event) => {
    event.target.value = "";
  };

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(exampleArray));
  }, [exampleArray]);

  console.log(exampleArray)

  return (
    <div className="addText">
      <div className="wrapper">
        <button id="addNewTask"
          onClick={function () {

            if ( (userInput === undefined || "") || (addDate === undefined || "") || (category == undefined || "") )

            { console.log("user empty")  } 
            else 
            { handleClick(userInput, addDate, category)  }

          }
          }>Add task</button>
        <input type="text" id="user-input" onChange={onChange} onClick={emptyInput} placeholder="add a new to-do" />
        <input type="date" onChange={dateManager} />

        <div className="form-cat">
          <label>Category</label>
          <select defaultValue="work" onChange={catManager}>
            <option id={1} value="home">HOME</option>
            <option id={2} value="work">WORK</option>
            <option id={3} value="random">OTHER</option>
          </select>
        </div>



      </div>
      <ul>
        {exampleArray
          .sort((a, b) => {
            a = getDayOfYear(parseISO(a.addDate));
            b = getDayOfYear(parseISO(b.addDate));
            if (a < b) {
              return -1;
            } else if (a > b) {
              return 1;
            } else {
              return 0;
            }
          })

          .map((item, i) => (

            <li key={i}>
              <input type="checkbox" className="check" />
              {item.userInput}
              <button key={i} className="delete-item" onClick={function () { deleteTask(i) }} >&#10007;</button>
              <button className="edit-button" onClick={() => setEditing(true)}>&#9998;</button>
              <span>{item.addDate}</span>
              <span>{item.category}</span>

            </li>
          ))}
      </ul>
    </div>
  );
}


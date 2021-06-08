import weekdays from './weekdays';
import { useEffect, useState } from "react";

console.log(weekdays)

export default function Calendar(props) {
    const [userInput, setUserInput] = useState([]);

    const onChange = (event) => {
        const newValue = event.target.value;
        setUserInput(newValue);
    }

    return  (
        weekdays.map((day) => 
          <table className="calendar" key={day.id}>
            <tr>{day.name}</tr>
            <tr>{day.date.toDateString()}</tr>
            <td><input type="text" id="user-input" onChange={onChange} /><button id="task" >&#43;</button></td>
          </table>
        ))};
    
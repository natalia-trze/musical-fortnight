import {useState} from "react"
import './monthlyStyle.css'
import Moment from 'moment';
import dateFns from 'date-fns';


export default function Monthly(){

  const [datesOfThisMonth, setDatesOfThisMonth] = useState([])
  const [currentDate, setCurrentDate] = useState(new Date().getDate())

  const nextDate = ()=> {setCurrentDate((previous) => previous + 1)} 

 

  /*
 const getCalendar = () => {
  let content = [];
  for (let i = 0; i < 31; i++) {
    content.push(<div className="day" key={i}>{i}</div>);   
  }
  return content
*/




  const daysOfMonth = () => {
    const days = [];
    let startDate = dateFns.startOfWeek(currentDate);
    for (let i = 0; i < 7; i++) {
          days.push(
             <div className="column col-center" key={i}>
             {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
             </div>
          );
       }
       return <div className="days row">{days}</div>;
    };






/*  const testdate = () => {
    setCurrentDate(dateFns.addMonths(currentDate, 1));
 };*/

/* // 1 get the current month
 const today = new Date();
 const thisMonth = today.getMonth();

 console.log("this month..."+thisMonth)
 
 // 2 get number of days in this month
 const numberOfDaysInThisMonth = new Date(
   today.getFullYear(),
   thisMonth + 1,
   0
 ).getDate();*/

//console.log(umberOfDaysInThisMonth)



//setCurrentDate(currentDate.getFullYear(), currentDate.getMonth(), 1, 1)
     
  /*const nextDay = () => {
    setCurrentDate(currentDate + 1);
 }*/

  //console.log((currentDate, dateFormat))

  //console.log(Moment(currentDate).format('d MMM'))

  // WE CAN LOOP OVER IT TO BUILD THE HTML
  /*datesOfThisMonth = [];
  for (let i = 0; i < 36; i++) {
    setDatesOfThisMonth = ((previous)=>
      new Date(today.getFullYear(), today.getMonth(), i + 1, 1)
    );
  }*/
    
 //<div>{dateFns.format(currentDate, dateFormat)}</div> 

 
return (
    <div>
      
      <div onClick={testdate}>{currentDate}</div>
        
        <form>
            start date: <input type="date" name="date-initial" /> end date:
            <input type="date" name="date-final" />
            <input type="text" name="newEvent" placeholder="type your event here" />
            <select name="colors" id="colors">
                <option value="purple">purple</option>
                <option value="yellow">yellow</option>
                <option value="blue">blue</option>
                <option value="orange">orange</option>
            </select>
            <button type="submit">save</button>
        </form>


        <div id="calendar"> 
        </div>


    </div>
    
)

    
} 

//{datesOfThisMonth.map((date,i) => <div key={i} className="today"></div>)}
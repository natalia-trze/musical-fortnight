import React, { useState, useEffect } from "react";
import dateFns, {isSameDay} from "date-fns";
import "./Calendar.css";


console.clear()
const Calendar = () => {
   
   const initialState = JSON.parse(localStorage.getItem("data")) || [{}];
   const [calendarEvents, setCalendarEvents] = useState(initialState);
   
   console.log(calendarEvents)
   
   const [currentDate, setCurrentDate] = useState(new Date());
   const [selectedDate, setSelectedDate] = useState(new Date());
   
   const header = () => {
      const dateFormat = "MMMM YYYY";
      return (
         <div className="header row flex-middle">
            <div className="column col-start">
            <div className="icon" onClick={prevMonth}>
            chevron_left
            </div>
            </div>
            <div className="column col-center">
            <span>{dateFns.format(currentDate, dateFormat)}</span>
            </div>
            <div className="column col-end">
            <div className="icon" onClick={nextMonth}>
            chevron_right
            </div>
            </div>
         </div>
      );
   };
   const days = () => {
      const dateFormat = "ddd";
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
   const cells = (currentDate) => {
      const monthStart = dateFns.startOfMonth(currentDate);
      const monthEnd = dateFns.endOfMonth(monthStart);
      const startDate = dateFns.startOfWeek(monthStart);
      const endDate = dateFns.endOfWeek(monthEnd);
      const dateFormat = "D";
      const rows = [];
      let days = [];
      let day = startDate;
      console.log("OYOY", day, currentDate, monthStart,  monthEnd, startDate, endDate)
      let formattedDate = "";
      while (day <= endDate) {
         for (let i = 0; i < 7; i++) {
            formattedDate = dateFns.format(day, dateFormat);
            const yn = new Date(Date.now()).getFullYear()
            const mn = new Date(Date.now()).getMonth()+1
            //const ourDate = yn + "-" + mn + "-" + formattedDate
            days.push(
               <div 
                  className={`column cell ${!dateFns.isSameMonth(day, monthStart)? "disabled" : dateFns.isSameDay(day, selectedDate) 
                  ? "selected" : "" }`} 
                  key={day} 
                  onClick={() => onDateClick(dateFns.parse(day))} onDoubleClick={()=> console.log("Hello")}
               > 
                  <span className="number">{formattedDate}</span>
                  <span className="bg">{formattedDate}</span>
                  <span style={{color:"#282c34" }} >{
                     calendarEvents
                        .filter(event => {
                           return ( dateFns.isSameDay(day, event[day]))

                        })
                        .map((eventsToday)=>{
                           return eventsToday[0]
                           //console.log('this is luis on ourdate...'+ourDate)
                           //eventsToday.map((event) => 
                           //   {return event[0]} 
                           //   )
                        })
                  }  
                  console.log(calendarEvents)
               </span>
            </div>
            );
            day = dateFns.addDays(day, 1); 
         }
         rows.push(
            <div className="row" key={day}> {days} </div>
         );
         days = [];
      }
      return <div className="body">{rows}</div>;
   }
   const nextMonth = () => {
      const _nextMonth = dateFns.addMonths(currentDate, 1)
      console.log({_nextMonth})
      setCurrentDate(_nextMonth);
   };
   const prevMonth = () => {
      const _prevMonth = dateFns.subMonths(currentDate, 1)
      console.log({_prevMonth})
      setCurrentDate(_prevMonth);
   };
   const onDateClick = day => {
      setSelectedDate(day);
   }
   useEffect(()=>console.log({currentDate}),[currentDate])
   return (
      <div className="calendar">
      <div>{header(currentDate)}</div>
      <div>{days(currentDate)}</div>
      <div>{cells(currentDate)}</div>
      </div>
   );
};
export default Calendar;
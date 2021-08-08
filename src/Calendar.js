import React, { useState } from "react";
import {
   isSameDay, format, startOfWeek, addDays,
   startOfMonth, endOfMonth, endOfWeek, isSameMonth,
   addMonths, subMonths, parseISO, getDayOfYear
} from 'date-fns'

import "./Calendar.css";

console.clear()
const Calendar = () => {

   const initialState = JSON.parse(localStorage.getItem("data")) || [];
   const [calendarEvents] = useState(initialState);

   console.log(calendarEvents)

   const [currentDate, setCurrentDate] = useState(new Date());
   const [selectedDate, setSelectedDate] = useState(new Date());

   const header = () => {
      const dateFormat = "MMMM yyyy";
      return (
         <div className="header row flex-middle">
            <div className="column col-start">
               <div className="icon" onClick={prevMonth}>
                  chevron_left
               </div>
            </div>
            <div className="column col-center">
               <span>{format(currentDate, dateFormat)}</span>
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
      const dateFormat = "EEE";
      const days = [];
      let startDate = startOfWeek(currentDate);
      for (let i = 0; i < 7; i++) {
         days.push(
            <div className="column col-center" key={i}>
               {format(addDays(startDate, i), dateFormat)}
            </div>
         );
      }
      return <div className="days row">{days}</div>;
   };
   const cells = (currentDate) => {
      const monthStart = startOfMonth(currentDate);
      const monthEnd = endOfMonth(monthStart);
      const startDate = startOfWeek(monthStart);
      const endDate = endOfWeek(monthEnd);
      const dateFormat = "d";
      const dateFormat2 = "yyyy-MM-dd";
      const rows = [];
      let days = [];
      let day = startDate;
      let formattedDate = "";
      let formattedDate2 = "";

      while (day <= endDate) {
         for (let i = 0; i < 7; i++) {
            formattedDate = format(day, dateFormat);
            formattedDate2 = format(day, dateFormat2);
            const yn = new Date(Date.now()).getFullYear()
            const mn = new Date(Date.now()).getMonth() + 1
            days.push(
               <div
                  className={`column cell ${!isSameMonth(day, monthStart) ? "disabled" : isSameDay(day, selectedDate)
                     ? "selected" : ""}`}
                  key={day}
                  onClick={() => onDateClick((day))} onDoubleClick={() => console.log("Hello")}
               >
                  <span className="bg">{formattedDate}</span>
                  <div className="tasks" style={{ color: "#282c34" }} >{
                     calendarEvents
                        .filter((event, i) => {
                           return getDayOfYear(parseISO(event.day)) === getDayOfYear(day)
                        })
                        .map((eventsToday, i) => {
                           return (<li key={i}>{eventsToday.text}</li>)
                        })
                  }
                  </div>
               </div>
            );
            day = addDays(day, 1);
         }
         rows.push(
            <div className="row" key={day}> {days} </div>
         );
         days = [];
      }
      return <div className="body">{rows}</div>;
   }
   const nextMonth = () => {
      const _nextMonth = addMonths(currentDate, 1)
      setCurrentDate(_nextMonth);
   };
   const prevMonth = () => {
      const _prevMonth = subMonths(currentDate, 1)
      setCurrentDate(_prevMonth);
   };
   const onDateClick = day => {
      setSelectedDate(day);
   }
   return (
      <div className="calendar">
         <div>{header(currentDate)}</div>
         <div>{days(currentDate)}</div>
         <div>{cells(currentDate)}</div>
      </div>
   );
};
export default Calendar;
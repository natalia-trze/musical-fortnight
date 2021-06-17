import React, { useState, useEffect } from "react";
import dateFns from "date-fns";
import { isSameDay, format, startOfWeek, addDays, 
         startOfMonth, endOfMonth, endOfWeek, isSameMonth, 
         addMonths, subMonths, parseISO, getDayOfYear} from 'date-fns'

import "./Calendar.css";


console.clear()
const Calendar = () => {
   
   const initialState = JSON.parse(localStorage.getItem("data")) || [];
   const [calendarEvents, setCalendarEvents] = useState(initialState);
   
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
      //const dateFormat = "ddd";
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

      console.log("OYOY day=" + day) 
      console.log("currentDate=" + currentDate)
      console.log("monthStart=" + monthStart)
      console.log("monthEnd=" + monthEnd)
      console.log("startDate=" + startDate)
      console.log("endDate=" + endDate)
      
   
      let formattedDate = "";
      let formattedDate2 = "";

      while (day <= endDate) {
         for (let i = 0; i < 7; i++) {
            formattedDate = format(day, dateFormat);
            formattedDate2 = format(day, dateFormat2);

            const yn = new Date(Date.now()).getFullYear()
            const mn = new Date(Date.now()).getMonth()+1
            //const ourDate = yn + "-" + mn + "-" + formattedDate
            days.push(
               <div 
                  className={`column cell ${!isSameMonth(day, monthStart)? "disabled" : isSameDay(day, selectedDate) 
                  ? "selected" : "" }`} 
                  key={day} 
                  //onClick={() => onDateClick((day))} onDoubleClick={()=> console.log("Hello")}
               > 
                  <span className="number">{formattedDate}</span>
                  <span className="bg">{formattedDate}</span>
                  <span style={{color:"#282c34" }} >{
                     calendarEvents
                        .filter((event,i) => {

                           if(getDayOfYear(parseISO(event[1]))===getDayOfYear(day))
                           {console.log("...aqui..."+event[i]) }else{
                              //console.log("no..este"+getDayOfYear(day))
                              //console.log("no..contra este"+getDayOfYear(parseISO(event[i])))
                              console.log(parseISO(event[1],1))

                           
                           }
                        
                           
                           //console.log("this is the event we wait for..."+parseISO(event[1]))
                           //console.log("this is newdate..."+ new Date(day.getFullYear(), day.getMonth(), day.getDay()))
                           //console.log("this is the day..."+getDayOfYear(day))
                           //console.log("this is the  formattedDate..."+ formattedDate2)
                           //if(getDayOfYear(parseISO(event[1]))===getDayOfYear(day)){console.log("this match !!!!!!!!!!")}
                           //else {console.log("NO")}

                           let luis2 = new Date(day.getFullYear(), day.getMonth(), day.getDay())
                           let luis3 = parseISO(event[1])

                           let luis4 = new Date(luis3.getFullYear(),luis3.getMonth(),luis3.getDate()) 

                            
                           //new Date(parseISO(event[0]).getFullYear(), parseISO(event[0]).getMonth(), parseISO(event[0]).getDay())))

                           //console.log(new Date(luis3.getFullYear(),luis3.getMonth(),luis3.getDate()))

                           //let luis6 = (isSameDay(luis4, luis2 ))
                           //let luis6 = (isSameDay(new Date(2014, 8, 4), new Date(2014, 8, 4)))

                           //return (isSameDay(luis4, luis2 ))

                           //console.log(luis6)
                           //console.log(luis4)
                           //console.log(luis2)
                        
                        })
                        .map((eventsToday)=>{
                           return eventsToday[0]
                           //console.log('this is luis on ourdate...'+ourDate)
                           //eventsToday.map((event) => 
                           //   {return event[0]} 
                           //   )
                        })
                  }  
                  
               </span>
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
      console.log({_nextMonth})
      setCurrentDate(_nextMonth);
   };
   const prevMonth = () => {
      const _prevMonth = subMonths(currentDate, 1)
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
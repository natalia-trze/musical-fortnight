import './App.css';
import NavBar from './Navbar.js';
import Footer from './Footer';
import ButtonList from './Buttons';
import { useState, useEffect } from "react";
import Calendar from './Calendar';
import Home from './Home';
import Addtext from './Addtext';
import DateTime from './datetime';
import Todolistapp from './todolist/Todolistapp';


const apps = ["Dark", "Light", "Custom"];
const menuButtons = ["Home", "Todolist", "Calendar", "Todolistapp"];


function App() {
  const [appTheme, setAppTheme] = useState(apps[0]);
  const changeAppTheme = (value) => {
    console.log(value)
    setAppTheme(value);
  };

  const [appSwitch, setAppSwitch] = useState(menuButtons[0]);
  const changeAppSwitch = (value) => {
    console.log(value)
    setAppSwitch(value);
  };

  return (
    <div className="app" id={appTheme + "-mode"}>
      <div className="user-theme" id={appTheme + "-mode"}>
        {
          apps[appTheme]
        }
        <DateTime />
      </div>

      <header className="app-header">
        
      </header>
      
      <ButtonList buttons={apps} callback={changeAppTheme} />
      <div className="main-box">
      <NavBar navName={menuButtons} callback1={changeAppSwitch} />
      
      <div className="app-container" id={appSwitch + "-mode"}>
        {
          {
            "Home":   <Home />,
            Todolist: <Addtext />,
            Calendar: <Calendar/>,
            Todolistapp: <Todolistapp/>
          }[appSwitch]
        }
      </div>
      </div>
      <footer className="footer-container">
        <Footer />
      </footer>
    </div >
  );
}

export default App;



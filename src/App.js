import './App.css';
import NavBar from './Navbar.js';
import Footer from './Footer';
import ButtonList from './Buttons';
import { useState } from "react";
import Calendar from './Calendar';
import Home from './Home';
import DateTime from './datetime';
import Todolistapp from './todolist/Todolistapp';
import 'bootstrap/dist/css/bootstrap.min.css';

const apps = ["Light", "Dark", "Custom"];
const menuButtons = ["Home", "Calendar", "Todolistapp"];

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
          <ButtonList buttons={apps} callback={changeAppTheme} />
        </div>
        <div className="main-box">
          <NavBar navName={menuButtons} callback1={changeAppSwitch} />

          <div className="app-container" id={appSwitch + "-mode"}>
            {
              {
                "Home": <Home />,
                Calendar: <Calendar />,
                Todolistapp: <Todolistapp />
              }[appSwitch]
            }
          </div>
        </div>
        <Footer />
      </div >
  );
}

export default App;



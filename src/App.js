import './App.css';
import NavBar from './Navbar.js';
import Footer from './Footer';
import Main from './Main.js'
import SignInButton from './SignInButton';
import ButtonList from './Buttons';
import Theme from './Theme';
import Dark from './Dark';
import Light from './Light';
import Custom from './Custom';
import { useState } from "react";
import Todolist from './Todolist';
import Calendar from './Calendar';
import Home from './Home';
import Addtext from './Addtext';


const apps = ["Dark", "Light", "Custom"];
const menuButtons = ["Home", "Todolist", "Calendar"];


function App() {
  const [appTheme, setAppTheme] = useState(apps[0]);
  const changeAppTheme = (value) => {
    console.log(value)
    setAppTheme(value);
  };

  const [appTheme1, setAppTheme1] = useState(menuButtons[0]);
  const changeAppTheme1 = (value) => {
    console.log(value)
    setAppTheme1(value);
  };

  return (
    <div className="App" id={appTheme + "-mode"}>
      <div className="user-theme" id={appTheme + "-mode"}>
          {
            {
              "Dark": <Dark Theme={Theme} />,
              Light: <Light Theme={Theme} />,
              Custom: <Custom Theme={Theme} />,
            }[appTheme]
          }
        </div>
      <header className="App-header">
    
        <ButtonList buttons={apps} callback={changeAppTheme} />
        <SignInButton />
      </header>

      <div className="Main">
        <Main userName="Luis" />
        <NavBar navName={menuButtons} callback1={changeAppTheme1} />
        

        <div className="app-container" id={appTheme1 + "-mode"}>
          {
            {
              "Home": <Home Theme={Theme} />,
              Todolist: <Addtext Theme={Theme} />, 
              Calendar: <Calendar Theme={Theme} />,
            }[appTheme1]
          }
        </div>

      </div>
      <footer className="footer-container">
        <Footer />
      </footer>
    </div>
  );
}

export default App;

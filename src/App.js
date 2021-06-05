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


const apps = ["Dark", "Light", "Custom"];
const menuButtons = ["Home", "Todolist", "Calendar"];


function App() {
  const [appTheme, setAppTheme] = useState(apps[0]);
  const changeAppTheme = (value) => {
    console.log(value)
    setAppTheme(value);
    //console.log(appTheme)
  };

  const [appTheme1, setAppTheme1] = useState(menuButtons[0]);
  const changeAppTheme1 = (value) => {
    console.log(value)
    setAppTheme1(value);
    //console.log(appTheme1)
  };

 
  return (
    <div className="App"  id={appTheme + "-mode"}>
      <header className="App-header">
        <ButtonList buttons={apps} callback={changeAppTheme}/>
        <SignInButton />

        <NavBar navName={menuButtons} callback1={changeAppTheme1} />

        <div id={appTheme1 + "-mode"}>
        {
          {
            "Home": <Home Theme={Theme} />,
            Todolist: <Todolist Theme={Theme} />,
            Calendar: <Calendar Theme={Theme} />,
          }[appTheme1]
        }
      </div>
      
      </header>
      <div className="Main">
        <Main userName="Stranger" />
        <div id={appTheme + "-mode"}>
        {
          {
            "Dark": <Dark Theme={Theme} />,
            Light: <Light Theme={Theme} />,
            Custom: <Custom Theme={Theme} />,
          }[appTheme]
        }
      </div>
      </div>
      <footer className="footer">
        <Footer />
      </footer>

    </div>
  );
}

export default App;

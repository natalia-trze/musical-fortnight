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

const apps = ["Dark", "Light", "Custom"];


function App() {
  const [appTheme, setAppTheme] = useState(apps[1]);
  const changeAppTheme = (value) => {
    console.log(value)
    setAppTheme(value);
    
  };
  return (
    <div className="App">
      <header className="App-header">
        <ButtonList buttons={apps} callback={changeAppTheme}/>
        <SignInButton />
        <NavBar />
      </header>
      <div className="Main">
        <Main userName="Stranger" />
        <div id={appTheme + "-mode"}>
        {
          {
            "dark": <Dark appTheme={appTheme} />,
            light: <Light appTheme={appTheme} />,
            custom: <Custom appTheme={appTheme} />,
          }["dark"]
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

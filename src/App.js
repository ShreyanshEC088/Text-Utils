// import logo from './logo.svg';
import './App.css';
import About from './Components/About';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForms from './Components/TextForms';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light');
  // const [mode1, setmode1] = useState('light')
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null);
    }, 1200);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#343a40";
      showAlert("Dark Mode has been Enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been Enabled", "success");
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert} />
        <div className='container my-3'>
        <Switch>
          <Route exact path="/about">
            <About mode={mode}/>
          </Route>
          <Route exact path="/">
            <TextForms heading="Enter the Text Below to Analyze" mode={mode} showAlert={showAlert} />
          </Route>
        </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
{/* <div classNameName="App">
<header classNameName="App-header">
<img src={logo} classNameName="App-logo" alt="logo" />
<p>
Edit <code>src/App.js</code> and save to reload.
</p>
<a
classNameName="App-link"
href="https://reactjs.org"
target="_blank"
rel="noopener noreferrer"
>
Learn React
</a>
</header>
</div> */}
// const toggleMode1 = () => {
//   if (mode === 'light') {
//     setMode('puple');
//     document.body.style.backgroundColor = "#343a40";
//     showAlert("Puple Mode has been Enabled", "success");
//   }
//   else {
//     setMode('light');
//     document.body.style.backgroundColor = "white";
//     showAlert("Light Mode has been Enabled", "success");
//   }
// }
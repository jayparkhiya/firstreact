import React, { useState } from "react";
//import logo from "./logo.svg";
import "./App.css";
import Wordanalayser from "./Components/Wordanalayser";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Alert from "./Components/Alert";
import { BrowserRouter, Route, Switch } from "react-router-dom";
function App() {
  const [alert, setAlert] = useState(null);

  const showalert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const [mode, setMode] = useState("light");
  const togglemode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "gray";
      showalert("Dark Mode Enabled", "success");
      //settext("light");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showalert("light Mode Enabled", "success");

      //settext("dark");
    }
  };
  return (
    <div>
      <BrowserRouter>
        <Navbar mode={mode} togglemode={togglemode} />
        <Alert alert={alert} />

        <Switch>
          <Route exact path="/about">
            <About Heading="About Us" />
          </Route>

          <Route exact path="/">
            <Wordanalayser
              title="Enter Your Text Below "
              mode={mode}
              showalert={showalert}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

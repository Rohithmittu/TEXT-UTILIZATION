import "./App.css";
// import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React, { useState } from "react";
import Alert from "./Components/Alert";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [Mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const togglemode = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark mode has been Enabled", "Success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been Enabled", "Success");
    }
  };

  return (
    <>
      {/* <Router> */}
        <Navbar
          title="TextUils"
          mode={Mode}
          aboutText="AboutUs"
          togglemode={togglemode}
        />
        <Alert alert={alert} />
        <div className="container">
          {/* <Routes>
            <Route exact path="/about"
              element={<About />}>
            </Route> */}

            {/* <Route exact path="/" */}
            {/* element={  */}
            <TextForm
              showAlert={showAlert}
              Heading="Enter the text to analse"
              mode={Mode}
            />
            {/* } */}
             
            {/* </Route>
          </Routes> */}
        </div>
      {/* </Router> */}
      {/* <About /> */}
    </>
  );
}

export default App;

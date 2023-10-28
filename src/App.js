
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Footer from "./components/Footer";
import Alert from "./components/Alert";


function App() {
  const [mode, setMode] = useState("light"); //whether dark is inabled or not

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#31356d";
      showAlert("Dark Mode is Enabled", "success");
      document.title = "TextUtils - Dark Mode";

      // setInterval(() => {
      // // document.title = "TextUtils is Amazing";
      // }, 2000);
      // setInterval(() => {
      // // document.title = "TextUtils - install";
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode is Enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };

  return (
    // <Navbar title="Hanumaan" aboutText = "About Hanumaan" />
    // <Navbar  />

    <>
      
        <Navbar
          title="TextUtils"
          aboutText="About"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
                <TextForm
                  showAlert={showAlert}
                  heading="Try TextUtils - Word Counter , Character Counter , Remove Extra Spaces"
                  mode={mode}
                />
        </div>

      <Footer mode={mode} />
    </>
  );
}
export default App;

import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Customizer from "./pages/Customizer";
import Canvasmodel from "./canvas";

const App = () => {
  return (
    <main className="App transition-all ease-in">
      <Home></Home>
      <Canvasmodel></Canvasmodel>
      <Customizer></Customizer>
    </main>
  );
};

export default App;

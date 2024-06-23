import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Canvas from "./canvas";
import Customizer from "./pages/Customizer";

const App = () => {
  return (
    <main className="App transition-all ease-in">
      <Home></Home>
      <Canvas></Canvas>
      <Customizer></Customizer>
    </main>
  );
};

export default App;

import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navBar/navBar";
import Playlist from "./components/playlist/playlist";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Playlist />
    </div>
  );
}

export default App;

import React from "react";
import ListBugs from "./components/ListBugs";
import NavBar from "./components/NavBar";
import axios from "axios";

import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ListBugs />
    </div>
  );
}

export default App;

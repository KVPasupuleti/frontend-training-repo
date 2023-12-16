import React from "react";
import "./App.css";
import CountriesList from "./components/CountriesList";
import StateComponent from "./components/StateComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StateComponent />
        <CountriesList />
      </header>
    </div>
  );
}

export default App;

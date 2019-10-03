import React from "react";
import "./App.css";
import Dashboard from "./Dashboardhboardd";
import Store from "./client/Store";

function App() {
  return (
    <div className="App">
      <Store>
        <Dashboard />
      </Store>
    </div>
  );
}

export default App;

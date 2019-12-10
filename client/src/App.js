import React from 'react';
import Activities from "./Activities"
import NewActivity from "./NewActivity"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NewActivity/>
        <Activities/>
      </header>
    </div>
  );
}

export default App;

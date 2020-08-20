import React from 'react';
import './App.css';
import Game from './components/Game';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Onitama</h1>
      </header>
      <div className="coffee-container">
        <div className="coffee-cup"></div>
        <div className="handle"></div>
      </div>
      <Game>
      </Game>
    </div>
  );
}

export default App;

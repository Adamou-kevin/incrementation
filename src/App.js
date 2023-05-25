import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <h1>Compteur: {count}</h1>
      <button className="increment-button" onClick={incrementCount}>
        Incrementer
      </button>
      <button className="decrement-button" onClick={decrementCount}>
        Décrementer
      </button>
    </div>
  );
}

export default App;

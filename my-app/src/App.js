import React, { useState } from 'react';
import './App.css';
import Greeting from './Greeting';

function App() {
  const [count, setCount] = useState(0); // useState to manage count state

  const handleClick = () => {
    setCount(count + 1); // Increment count on button click
  };

  return (
    <div className="App">
      <header className="App-header">
        <Greeting name="John" />  {/* Use the Greeting component */}
        <p>Welcome to my React App!</p>
        <p>You clicked {count} times</p>
        <button onClick={handleClick}>
          Click me
        </button>
      </header>
    </div>
  );
}

export default App;

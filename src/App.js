import React, { useState } from 'react';
import logo from './logo.svg';
import Button from './components/Button';
import './App.css';

function App() {
  //useState() initializes the count variable at 0 and provides us the setCount() method to update its value.
  const [count, setCount] = useState(0);

  const incrementCount = (increment) => {
    //todo
    setCount(count + increment);
  };

  return (
    <div className="App">
      <h3>React Counter</h3>
      <Button increment={1} onClickFunction={incrementCount} />
      <Button increment={10} onClickFunction={incrementCount} />
      <Button increment={100} onClickFunction={incrementCount} />
      <Button increment={1000} onClickFunction={incrementCount} />
      <div className="result">
        <span>You've clicked {count}</span>
      </div>
    </div>
  );
}

export default App;

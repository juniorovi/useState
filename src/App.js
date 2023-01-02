import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      
    </div>
  );
}
function Counter(){
  const [count, setCount] = useState(0);
  const increaseCount =()=>{
    const newCount = count + 1;
    setCount(newCount);
  }
  return(
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increaseCount}>Increase</button>
    </div>
  )
}

export default App;

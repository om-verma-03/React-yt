import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter] = useState(0)

  const addValue = ()=>{
    if(counter+1 <= 20)
      counter = counter + 1;
      setCounter(counter);
  }
  const removeValue = ()=>{
    if(counter-1 >= 0)
      counter = counter-1;
      setCounter(counter);
  }
  return (
    <>
      <h1>Chai or React</h1>
      <h2>Counter: {counter}</h2>

      <button onClick={addValue}>Add</button>
      <br></br>
      <button onClick={removeValue}>Remove</button>
    </>
  )
}

export default App

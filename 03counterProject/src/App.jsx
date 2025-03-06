import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

  const increment = () => {
    if( counter >= 5) {
      setCounter(5)
    }
    else { 
      setCounter(counter + 1)
    }
  }
  const decrement = () => {
    if( counter <= 0) setCounter(0)
    else setCounter(counter - 1) 
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>{counter}</h2>
      <button onClick={increment} > Increment </button>
      <br />
      <button onClick={decrement} >Decrement</button>
    </>
  )
}

export default App

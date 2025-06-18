import { useState } from 'react'
import './App.css'

function App() {

const [count, setCount] = useState(0)
const MAX = 10
const increment = () => {
  
  if (count+1 > 10) {
    return
  } else {
    setCount(count+1)
  }
  return count
}

function resetCount() {
  setCount(0)
}

  return (
    <>
      <div>
        <button onClick={increment}>Count: {count}
        </button>
        <br />
        <button onClick={resetCount} >Reset</button>
      </div>
    </>
  )
}

export default App

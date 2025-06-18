import { useState } from 'react'
import './App.css'

function Counter({initial = 0, step = 1, MAX = 10}) {

const [count, setCount] = useState(initial)
function increment() {
setCount(c => Math.min(c+step,MAX))
}

function resetCount() {
  setCount(initial)
}

  return (
    <>
      <div>
        <button onClick={increment} disabled={count >= MAX}>Count: {count}
        </button>
        <br />
        <button onClick={resetCount} >Reset</button>
      </div>
    </>
  )
}



export default function App() {
  return <Counter initial={0} step= {1} MAX={11}/>
}

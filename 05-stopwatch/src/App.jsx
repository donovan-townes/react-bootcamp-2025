import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import './App.css'

function App() {

  return (
    <>
 <Stopwatch/>
    </>
  )
}
export default App

function Stopwatch() {

  const [elapsed, setElapsed] = useState(0)
  const [running, setRunning] = useState(false)
  const id = useRef(null)
  
  useEffect(() => () => clearInterval(id.current),[])


  function incrementTime() {
      setElapsed(elapsed => elapsed + 10)
    }
    
    function startTimer() {
      if (id.current) return;
      
      setElapsed(0)
      id.current = setInterval(incrementTime, 10)
      console.log("Starting Timer")
      setRunning(true)
  }

  function stopTimer() {
    console.log("Stopping Timer")
    clearInterval(id.current)
    id.current = null;
    setRunning(false)

    //stop timer
  }
  function pauseTimer() {
    if (!running) 
      return unpauseTimer()

      console.log("Pausing Timer")
    clearInterval(id.current)
    id.current = null
    setRunning(false)
  } 
  function unpauseTimer() {
    console.log("Unpausing")
    id.current = setInterval(incrementTime, 10)
    setRunning(true)
    //unpause
  }

  function resetTimer() {
    console.log("Reset Timer")
    clearInterval(id.current)
    // id.current = null;
    setElapsed(0)

  }

  return (
    <>
    <h1>Stopwatch</h1>
    <Display ms={elapsed}/>
    <Dock name= "Start⌚" action={startTimer}/>
    <Dock name= "Pause" action={pauseTimer}/>
    <Dock name= "Stop" action={stopTimer}/>
    <Dock name= "Reset"action={resetTimer}/> <hr/>
    
    
    </>
  )
}


function Display({ ms }) {
  const sec = ((ms / 1000) % 60).toFixed(2);
  const min = Math.floor((ms / (1000 * 60)) % 60);
  const hour = Math.floor(ms / (1000 * 60 * 60));

  const [secInt, secDec = "00"] = sec.split(".");
  const secDisplay = `${secInt.padStart(2, "0")}:${secDec.padEnd(2, "0")}`;

  return (
    <>
      <p>{hour == 0 ? "" : hour < 10 ? "0" + hour + ":" : hour + ":"}
        {min < 10 ? "0" + min : min}:
        {secDisplay}s
      </p>
    </>
  );
}

function Dock({name, action}) {
  return (
    <>
    <button onClick={action}>{name}</button>
    </>
  )
}
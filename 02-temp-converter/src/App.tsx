import { useState } from 'react'
import './App.css'

  function TempUnit({unit}) {
    return <input
      type="number"
      className = {hasError ? "error" : ""}
      value= {unit === "Celsius" ?  celsius : unit === "Kelvin" ? kelvin : fahrenheit}
      onChange={(e) => handleTempChange(e,unit)}

          />
  }

  function TempConverter({initial = 0}) {
  const [hasError, setHasError] = useState(false)
  const [celsius, setCelsius] = useState<number | "">(initial)
  const fahrenheit = celsius === "" ? "" : (celsius * 9) / 5 + 32
  const kelvin = celsius === "" ? "" : (celsius + 273.15)



  function handleTempChange(e, unit) {
    
    const rawInput = e.target.value
    if (rawInput === "") {
        setCelsius("")
        setHasError(false)
        return
      }     
      const num = Number(rawInput)
      const bad = isNaN(num)
      
      setHasError(bad)
      console.log(rawInput)

     switch(unit) {
      case "Celsius": 
        setCelsius(num)
        break
      case "Fahrenheit":
        setCelsius(((num - 32) * 5) / 9)
        break  
      case "Kelvin":
        setCelsius(num - 273.15)
        break
      default:
          setCelsius(0)
        }
     
  }
 
  return (
    <>
     <h2>Temperature Converter</h2>
    <div className="input-boxes">
    <h2>C</h2>
    <TempUnit unit="Celsius"/>
    <h2>F</h2>
    <TempUnit unit="Fahrenheit"/>
    <h2>K</h2>
    <TempUnit unit="Kelvin"/>
  </div>

    </>
  )
}

export default function App() {
  return <>
    <h1>Hello</h1>
    <TempConverter/>
  </>
}

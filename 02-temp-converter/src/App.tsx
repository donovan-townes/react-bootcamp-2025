import { useState } from 'react'
import './App.css'

function TempConverter({initial = 0}) {
  const [celsius, setCelscius] = useState<number | "">(initial)
  const fahrenheit = celsius === "" ? "" : (celsius * 9) / 5 + 32


  const handleCChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value
    setCelscius(input === "" ? "" : Number(input))
  }

  const handleFChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value
    setCelscius( input === "" ? "" : ((Number(input) - 32) * 5) / 9)
  }


  return (
    <>
     <h2>Temperature Converter</h2>
    <div className="temp-box">
    <h2>F</h2>
    <input 
      type="string" 
      value={fahrenheit} 
      onChange={handleFChange} 
       />
    </div>
    <div>
    <h2>C</h2>
     <input 
        type="string" 
        value={celsius} 
        onChange={handleCChange}
        />
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

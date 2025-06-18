import { useState } from 'react'
import './App.css'

function TempConverter({initial = 0}) {
  const toC = (f: number) => (f - 32) * 5/9
  const [cVal, setC] = useState(initial)
  
  const toF = (c: number) => (c * 9/5) + 32  
  const [fVal, setF] = useState(toF(initial))
  


  const updateValue = (e:any, type: string = "C") => {
    // console.log(e.target.value)
    const input = e.target.value
    if (type=="C") {
      setF(toF(input))
      setC(input)
    } else {
      setC(toC(input))
      setF(input)
    }


  }

  return (
    <>
     <h2>Temperature Converter</h2>
    <div className="temp-box">
    </div>
    <div className="temp-box">
    <h2>F</h2><input type="number" value={fVal} onChange={(e) => updateValue(e,"F")}  />
    </div>
    <div>
    <h2>C</h2>
     <input type="number" value={cVal} onChange={(e) => updateValue(e,"C")}/>
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

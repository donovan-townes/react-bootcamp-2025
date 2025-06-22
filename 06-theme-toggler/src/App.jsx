import { useState } from 'react'
import { useEffect } from 'react'
import { createContext } from 'react'
import { useContext } from 'react'
import './App.css'

const ThemeContext = createContext(null)
function App() {
const prevTheme = localStorage.getItem("theme")
  return (
    <>
    <ThemeToggler storedTheme={prevTheme ? prevTheme : "dark"}/>
    </>
  )
}

export default App

// ---- Theme Toggler
function ThemeToggler({ storedTheme }) {

  const [theme ,setTheme] = useState(storedTheme)
  useEffect((() => {
    localStorage.setItem("theme", theme)
  }
  ), [theme])
  

  return (
    <>
    <ThemeContext value={theme}>
    <div className={theme}>
    <h1>Theme Toggler</h1>
    <Display setTheme={setTheme}/>
    </div>
    </ThemeContext>
    </>
  )
}

function Display ({setTheme}) {
  return (
    <div>
    <p>Toggle Theme</p>
    <Button action={() => setTheme("light")}>
      ☀️
    </Button>
    <Button action ={() => setTheme("dark")}>
      🌙
    </Button>
    </div>
  )
}

function Button({action, children}) {
  const theme = useContext(ThemeContext)  
  return (
    <button className={`button-${theme}`}
    onClick={action}
    >
    {children}
    </button>
  )
}

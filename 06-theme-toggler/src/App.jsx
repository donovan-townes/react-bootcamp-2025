import { useState } from 'react'
import { useEffect } from 'react'
import { createContext } from 'react'
import { useContext } from 'react'
import './App.css'

const ThemeContext = createContext(null)
function App() {
// const prevTheme = localStorage.getItem("theme")
  return (
    <>
    <ThemeToggler/>
    </>
  )
}

export default App

// ---- Theme Toggler
function ThemeToggler() {
  const [theme ,setTheme] = useState(() => localStorage.getItem("theme") || "dark")
  useEffect((() => {
    localStorage.setItem("theme", theme)
  }
  ), [theme])
  

  return (
    <>
    <ThemeContext.Provider value={{theme, setTheme}}>
    <div className={theme}>
    <h1>Theme Toggler</h1>
    <Display/>
    </div>
    </ThemeContext.Provider>
    </>
  )
}

function Display () {
  return (
    <div>
    <p>Toggle Theme</p>
    <Button>☀️</Button>
    <Button>🌙</Button>
    </div>
  )
}

function Button({children}) {
  const {theme, setTheme} = useContext(ThemeContext)  
  return (
    <button className={`button-${theme}`}
    onClick={() => setTheme(theme=== "dark" ? "light" : "dark")}
    >
    {children}
    </button>
  )
}

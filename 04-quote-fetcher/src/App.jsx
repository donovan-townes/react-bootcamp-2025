import { useCallback, useEffect, useState } from 'react'
import './App.css'
function App() {
  return (
    <>
  <QuoteFetcher/>
  </>
  )
}

const API_URL = 'https://quoteslate.vercel.app/api/quotes/random'

export default App
function QuoteFetcher() {
  const [quote, setQuote] = useState('Test')
  const [error, setError] = useState(null)
  const [disableButton, setDisableButton] = useState(false)

  const fetchQuote = useCallback( async () => {
      console.log("fetching quote")
      setQuote("Loading....")
      setDisableButton(true)

      const controller = new AbortController()
      try {
          const res = await fetch(API_URL, {signal: controller.signal })
          const {quote, author} = await res.json()      
        setQuote(`"${quote}" -${author}`)
      } catch (e)  {
        if (e.name !== "AbortError") setError(`❌ could not load quote`)
        console.log(e)
      } finally {
        setDisableButton(false)
      }
      return () => controller.abort()
      },[]
    )

  useEffect(() =>{
    fetchQuote();
    // clean up
  },[fetchQuote])
 
  return (
    <>
    <div>
      <h1>Random Quote</h1>
      { error ? (
        <h3>{error}</h3>
      ) : (

        <QuoteCard quote={quote} />
      )
    }
      <button disabled={disableButton} onClick={fetchQuote}>New Quote</button>
    </div>
    </>
  )
}

function QuoteCard({ quote }) {
  return (
    <h2>{quote}</h2>
  )
}
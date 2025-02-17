import { useState } from 'react'
import quotes from './assets/quotes.json'
import { FaTwitter, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import './App.css'

interface Quote {
  quote: string;
  author: string;

}
const randomQuote = (): Quote => {
  return quotes[Math.floor(Math.random() * quotes.length)]
}

const getColor = (): string => {
  const red = Math.floor(Math.random() * 120)
  const blue = Math.floor(Math.random() * 120)
  const green = Math.floor(Math.random() * 120)

  return `rgb(${red},${green},${blue})`;
}

const transition = "all 1s";

function App() {
  const [quote, setQuote] = useState<Quote>(randomQuote())
  const [randomColor, setColor] = useState<string>(getColor())
  const newQuote = () => {
    setQuote(randomQuote());
    setColor(getColor());
  }



  return (
    <div className='background'>
      <div id="quote-box" style={{
        boxShadow: `0px 0px 100px ${randomColor}`,
        transition: `box-shadow 1s`
      }}>

        <div className='content' style={{ color: randomColor, transition }}>

          <h2 id="text"><FaQuoteLeft size="25" /> {quote.quote} <FaQuoteRight size="25" /></h2>
          <h4 id="author">-{quote.author}</h4></div>
        <div id='buttons'>
          <a style={{
            backgroundColor: randomColor, transition
          }} id="tweet-quote" href={'twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${quote.quote}'}>
            <FaTwitter color='fff' />
          </a>

          <button style={{ backgroundColor: randomColor, transition }} onClick={newQuote} id="new-quote">new Quote!</button>
        </div>
      </div>
    </div>
  )
}

export default App

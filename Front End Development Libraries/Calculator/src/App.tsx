import { useState } from 'react'
import './App.css'
// sorry if this is not readable ):
function App() {
  const [text, setText] = useState("0") // so this is the main text and if you press like a + it will simply show +
  const [equation, setEqu] = useState("") // this is the whole expression, it's like 5 + 5 = 10
  const [stack, setStack] = useState(true); //this is for stacking the numbers for making more than 1 digit numbers (it could've been handled better)
  const [last, setLast] = useState("") // this is the answer from last equation, like a history but with only 1 slot
  const [evaluated, setEvalu] = useState(false) // this lets the other function know that if an equation has been done before
  const opers = ["+", "*", "/", "-"]

  const clear = () => { //called by pressing AC
    setText("0")
    setEqu("")
    setStack(true)
    setEvalu(false)
  }

  const add = (num: string) => { // start from the if (opers.includes(num)) part, this part is tough
    if (evaluated) {
      if (opers.includes(num)) {
        setText(num)
        setEqu(last + num) // start from the answer of the last expression
      } else {
        setText(num)
        setEqu(num) // so it starts a new expression when a number is added after an equation
      }
      setEvalu(false)
      return
    }

    if (opers.includes(num)) { // !START READING THE FUNCTION FROM HERE!

      setStack(false)
      if (equation === "" || (text === "0" && num !== "-")) { //you cannot start with an operator
        return;
      }

      if (opers.includes(text) && num !== "-") { // so if you enter *+ it will turn into + but this won't work on -
        setText(num);
        setEqu((prev) => prev.replace(/[*+/\-]+$/, num));
        return;
      }

      if (num === "-" && text !== "-") {  //and if our input is - we accept it like this : *-
        setText(num);                     // if we encounter something like *-+ the if statement right above this one will take care of it
        setEqu((prev) => prev + num);
        return;
      }

      setText(num);
      setEqu((prev) => prev + num); // this will happen when the last input is a number and the input is a operator
      return;
    }

    if (num === "." && text.includes(".")) { // so . is not a operator but just like operators we cant write ..
      return;
    }
    if (stack) {
      setText((prev) => (prev === "0" ? num : prev + num)); //execute when the input is an number and we cant start by a 0
      setEqu((prev) => prev + num);

    } else {
      setText(num);
      setEqu((prev) => prev + num);
      setStack(true);
    }

  };


  const evaluate = (expression: string) => {
    try {
      setText(eval(expression)) //Bibbidi Bobbidi Boooo! your string is now an operation!
      setEqu(equation + "=" + eval(expression))
      setLast(eval(expression).toString())
      setEvalu(true)
    } catch (error) {
      setText("Error");
      setEqu(equation + "=" + eval(expression))
    }
  };

  return (
    <div>
      <div id="container">
        <div id="equation">{equation}</div>
        <div id="display">
          <div id="text">{text}</div>
        </div>
        <div id="buttons">
          <button onClick={clear} id="clear" className='wide'>AC</button>
          <button id="divide" onClick={() => add("/")}>/</button>
          <button id="multiply" onClick={() => add("*")}>X</button>
          <button id="seven" onClick={() => add("7")}>7</button>
          <button id="eight" onClick={() => add("8")}>8</button>
          <button id="nine" onClick={() => add("9")}>9</button>
          <button id="subtract" onClick={() => add("-")}>-</button>
          <button id="four" onClick={() => add("4")}>4</button>
          <button id="five" onClick={() => add("5")}>5</button>
          <button id="six" onClick={() => add("6")}>6</button>
          <button id="add" onClick={() => add("+")}>+</button>
          <button id="one" onClick={() => add("1")}>1</button>
          <button id="two" onClick={() => add("2")}>2</button>
          <button id="three" onClick={() => add("3")}>3</button>
          <button id="equals" className='tall' onClick={() => evaluate(equation)}>=</button>
          <button id="zero" className='wide' onClick={() => add("0")}>0</button>
          <button id="decimal" onClick={() => add(".")}>.</button>
        </div>
      </div>
    </div>
  )
}

export default App

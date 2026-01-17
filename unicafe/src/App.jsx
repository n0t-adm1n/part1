import { useState } from 'react'

const Button = ({text, onClick}) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const Heading = ({text}) => {
  return <h1>{text}</h1>
}

function App() {
  //states
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  //event handlers
  const handleClick = (setter, state) => {
    return ()=>{setter(state + 1)}
  }


  return (
    <>
      <Heading text={"give feedback"} />
      <Button onClick={handleClick(setGood, good)} text={"good"} />
      <Button onClick={handleClick(setNeutral, neutral)} text={"neutral"} />
      <Button onClick={handleClick(setBad, bad)} text={"bad"} />

      <Heading text={"statistics"} />
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </>
  )
}

export default App

import { useState } from 'react'

const Button = ({text, onClick}) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const Heading = ({text}) => {
  return <h1>{text}</h1>
}

const Statistics = ({good, neutral, bad, all, average, positive}) => {
  
  if(all == 0) {
    return (
      <>
        <Heading text={"statistics"} />
        <p>No feedback given</p>
      </>
    )
  }
  
  return (
    <>
      <Heading text={"statistics"} />
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {average}</p>
      <p>posivtive {positive} %</p>
    </>
  )
}

function App() {
  //states
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [average, setAverage] = useState(0);
  const [positive, setPositive] = useState(0);


  //event handlers
  const handleGoodClick = () => {
    
    let newGood = good + 1;
    setGood(newGood);
    
    let newAll = all + 1;
    setAll(newAll);

    console.log(good, bad, neutral)

    setAverage((newGood - bad) / newAll);
    setPositive(newGood / newAll );
  }

  const handleNeutralClick = () => {
    
    let newNeutral = neutral + 1;
    setNeutral(newNeutral);
    
    let newAll = all + 1;
    setAll(newAll);

    console.log(good, bad, neutral)

    setAverage((good - bad) / newAll);
    setPositive(good / newAll );
  }

  const handleBadClick = () => {
    
    let newBad = bad + 1;
    setBad(newBad);
    
    let newAll = all + 1;
    setAll(newAll);

    console.log(good, newBad, neutral)

    setAverage((good - newBad) / newAll);
    setPositive(good / newAll );
  }

  const handleClick = (setter, state) => {
    return ()=>{
      setter(state + 1);
      let newAll = all + 1;
      setAll(newAll);

      console.log(good, bad, neutral)

      setAverage((good - bad) / newAll);
      setPositive(good / newAll );
    }
  }


  return (
    <>
      <Heading text={"give feedback"} />
      <Button onClick={handleGoodClick} text={"good"} />
      <Button onClick={handleNeutralClick} text={"neutral"} />
      <Button onClick={handleBadClick} text={"bad"} />

      <Statistics   
          good={good} 
          neutral={neutral}
          bad={bad}
          all={all}
          average={average}
          positive={positive}
      />
    </>
  )
}

export default App

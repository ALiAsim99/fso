import { useState } from 'react'

const Button=({onclick,text})=><button onClick={onclick}>{text}</button>
const StatisticLine =({text,value})=><p>{text} {value}</p>


const Statistics=({good,bad,neutral})=>{
  const total=good+bad+neutral;
  const avg=total?((bad*-1)+good)/total:0;
  const totalPositivePerc=total?(100*good/total).toFixed(2):0;
  return(
    <>
    <h1>Statistics</h1>
    {total?(<>
      <StatisticLine text="good" value={good}/>
      <StatisticLine text="neutral" value={neutral}/>
      <StatisticLine text="bad" value={bad}/>
      <StatisticLine text="all" value={total}/>
      <StatisticLine text="average" value={avg}/>
      <StatisticLine text="positive" value={totalPositivePerc}/>
    </>)
        :
        (<p>No feedback given</p>)
  }
    
    </>
  )
    

}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" onclick={()=>setGood(good+1)} />
      <Button text="neutral" onclick={()=>setNeutral(neutral+1)} />
      <Button text="bad" onclick={()=>setBad(bad+1)} />
      <Statistics good={good} bad={bad} neutral={neutral}/>
    </div>
  )
}

export default App
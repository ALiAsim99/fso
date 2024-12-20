import { useState } from 'react'

const Button=({text,handleClick})=>{
  return(
   <>
     <button onClick={handleClick}>
      {text}
    </button>
   </>
  )
}
const Display=({text,anecdotes,votes})=>{
  return (
    <>
      <h1>{text}</h1>
      <p>{anecdotes}</p>
      <p>has {votes} votes</p>
    </>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0);
  const [votes,setVotes]=useState(Array(anecdotes.length).fill(0));
 

  const handleVotes=()=>{
    const newVotes=[...votes]
    newVotes[selected]+=1;
    setVotes(newVotes);
    
    
  }
  const handleAnecdote=()=>{
    let newSelected=Math.floor(Math.random()*anecdotes.length);

    setSelected(newSelected)
  }
  const maxVote=votes.indexOf(Math.max(...votes));
  return (
    <div>
      <Display text="Anecdote of the day" anecdotes={anecdotes[selected]} votes={votes[selected]}/>
      <Button text="next anecdote" handleClick={handleAnecdote}/>
      <Button text="Vote" handleClick={handleVotes}/>
      <Display text="Anecdote with most votes" anecdotes={anecdotes[maxVote]} votes={votes[maxVote]}/>

    </div>
  )
}

export default App